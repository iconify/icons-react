import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mev5h9d-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mev5h9d-t"/>`,
		"fallback": "noviair-light:archive-arrow-down",
	});
}

export default Component;
