import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh4rqfpek.css';
import '../../css/r/rzrmuq82c.css';
import '../../css/c/c1uaxoita.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh4rqfpek"/><path class="rzrmuq82c"/><path class="c1uaxoita"/>`,
		"fallback": "withicons-bauhaus:align-right",
	});
}

export default Component;
