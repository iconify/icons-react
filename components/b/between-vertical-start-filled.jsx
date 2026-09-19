import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiu_6cclx.css';
import '../../css/k/kc82gybja.css';
import '../../css/l/l2xkgdcaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kiu_6cclx"/><rect class="kc82gybja"/><rect class="l2xkgdcaz"/>`,
		"fallback": "boxicons:between-vertical-start-filled",
	});
}

export default Component;
