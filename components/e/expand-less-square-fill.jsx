import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deegn0b7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="deegn0b7g"/>`,
		"fallback": "si:expand-less-square-fill",
	});
}

export default Component;
