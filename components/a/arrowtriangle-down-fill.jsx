import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_fq0ob9t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_fq0ob9t"/>`,
		"fallback": "f7:arrowtriangle-down-fill",
	});
}

export default Component;
