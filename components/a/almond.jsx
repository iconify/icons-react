import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhmkg2bpi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhmkg2bpi"/>`,
		"fallback": "iconito:almond",
	});
}

export default Component;
