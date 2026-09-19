import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7u52s0kz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g7u52s0kz"/>`,
		"fallback": "gravity-ui:flame",
	});
}

export default Component;
