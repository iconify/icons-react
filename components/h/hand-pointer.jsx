import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymxomjbvk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymxomjbvk"/>`,
		"fallback": "fa7-regular:hand-pointer",
	});
}

export default Component;
