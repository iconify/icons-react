import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz4zr0-dm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zz4zr0-dm"/>`,
		"fallback": "heroicons:envelope-open-16-solid",
	});
}

export default Component;
