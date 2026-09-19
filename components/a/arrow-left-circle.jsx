import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dsbl1nj-w.css';
import '../../css/x/xcetmgeuw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#svgIDa)"><path clip-rule="evenodd" class="dsbl1nj-w"/></g><defs><clipPath id="svgIDa"><path class="xcetmgeuw"/></clipPath></defs></g>`,
		"fallback": "heroicons-solid:arrow-left-circle",
	});
}

export default Component;
