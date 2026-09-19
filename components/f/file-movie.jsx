import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7gmfrjki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7gmfrjki"/>`,
		"fallback": "fe:file-movie",
	});
}

export default Component;
