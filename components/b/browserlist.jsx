import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l11fmibpg.css';

const viewBox = {"width":140,"height":140};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l11fmibpg"/>`,
		"fallback": "material-icon-theme:browserlist",
	});
}

export default Component;
