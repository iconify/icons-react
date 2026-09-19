import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m25bf8bga.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m25bf8bga"/>`,
		"fallback": "f7:arrow-2-circlepath-circle",
	});
}

export default Component;
