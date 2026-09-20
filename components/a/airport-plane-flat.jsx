import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pas7cr1gf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pas7cr1gf"/>`,
		"fallback": "streamline-color:airport-plane-flat",
	});
}

export default Component;
