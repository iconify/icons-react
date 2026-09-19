import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmg665juo.css';
import '../../css/o/odwst6b3m.css';
import '../../css/h/hb1bi3sso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmg665juo"/><rect class="odwst6b3m"/><rect class="hb1bi3sso"/>`,
		"fallback": "boxicons:between-horizontal-start-filled",
	});
}

export default Component;
