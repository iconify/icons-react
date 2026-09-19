import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf57mkbcm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf57mkbcm"/>`,
		"fallback": "codicon:folder-opened-compact",
	});
}

export default Component;
