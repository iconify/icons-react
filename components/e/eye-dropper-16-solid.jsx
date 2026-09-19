import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxye8sb5h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jxye8sb5h"/>`,
		"fallback": "heroicons:eye-dropper-16-solid",
	});
}

export default Component;
