import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy190urnz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jy190urnz"/>`,
		"fallback": "streamline-flex:bicycle-bike-remix",
	});
}

export default Component;
