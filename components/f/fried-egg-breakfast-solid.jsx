import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inp-gjbio.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="inp-gjbio"/>`,
		"fallback": "streamline-flex:fried-egg-breakfast-solid",
	});
}

export default Component;
