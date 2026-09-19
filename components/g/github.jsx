import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjt7kzvwo.css';

const viewBox = {"width":1227.825,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjt7kzvwo"/>`,
		"fallback": "brandico:github",
	});
}

export default Component;
