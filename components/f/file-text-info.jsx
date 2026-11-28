import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axul6db8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axul6db8p"/>`,
		"fallback": "noviair-light:file-text-info",
	});
}

export default Component;
