import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0qma15uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0qma15uf"/>`,
		"fallback": "bxl:500px",
	});
}

export default Component;
