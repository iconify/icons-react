import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vva995_fr.css';

const viewBox = {"width":24,"height":24,"left":-0.5,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vva995_fr"/>`,
		"fallback": "jam:highlighter",
	});
}

export default Component;
