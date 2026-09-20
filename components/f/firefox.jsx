import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm5pvq32z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm5pvq32z"/>`,
		"fallback": "la:firefox",
	});
}

export default Component;
