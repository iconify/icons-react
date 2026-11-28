import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km263xb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km263xb3y"/>`,
		"fallback": "noviair-light:file-heart",
	});
}

export default Component;
