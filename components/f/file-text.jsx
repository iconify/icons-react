import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3rm31rhn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3rm31rhn"/>`,
		"fallback": "fa7-regular:file-text",
	});
}

export default Component;
