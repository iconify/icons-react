import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f95-ijf-n.css';
import '../../css/v/vie1t0bsw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f95-ijf-n"/><path class="vie1t0bsw"/>`,
		"fallback": "material-icon-theme:folder-java",
	});
}

export default Component;
