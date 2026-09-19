import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owv2r90mf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owv2r90mf"/>`,
		"fallback": "fa7-brands:canadian-maple-leaf",
	});
}

export default Component;
