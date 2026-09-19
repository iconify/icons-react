import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au9_58mke.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au9_58mke"/>`,
		"fallback": "fluent-mdl2:increase-indent-text-mirrored",
	});
}

export default Component;
