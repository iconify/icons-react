import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvg1_8wii.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvg1_8wii"/>`,
		"fallback": "bi:cup-straw",
	});
}

export default Component;
