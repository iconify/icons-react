import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft30k1bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ft30k1bqg"/>`,
		"fallback": "griddy-icons:banknote",
	});
}

export default Component;
