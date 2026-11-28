import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji66g-b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji66g-b2t"/>`,
		"fallback": "noviair-light:cloud-lightning",
	});
}

export default Component;
