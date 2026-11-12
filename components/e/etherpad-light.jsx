import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5biwmbup.css';
import '../../css/g/gjgzt7bhj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5biwmbup"/><path class="gjgzt7bhj"/>`,
		"fallback": "selfhst:etherpad-light",
	});
}

export default Component;
