import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2dwvmnwp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2dwvmnwp"/>`,
		"fallback": "garden:dots-grid-2x3-20",
	});
}

export default Component;
