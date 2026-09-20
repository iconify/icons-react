import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vma_27vqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vma_27vqy"/>`,
		"fallback": "keyline-icons:heading-5",
	});
}

export default Component;
