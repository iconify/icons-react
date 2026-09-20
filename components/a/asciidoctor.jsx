import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s67rxsfwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s67rxsfwy"/>`,
		"fallback": "thesvg-color:asciidoctor",
	});
}

export default Component;
