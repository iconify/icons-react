import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zge7m7b_f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zge7m7b_f"/>`,
		"fallback": "heroicons-solid:document-minus",
	});
}

export default Component;
