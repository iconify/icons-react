import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss1agp6sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss1agp6sr"/>`,
		"fallback": "pixel:arrow-alt-circle-left-solid",
	});
}

export default Component;
