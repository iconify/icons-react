import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi9pucb8a.css';
import '../../css/y/y008p5b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi9pucb8a"/><path clip-rule="evenodd" class="y008p5b6g"/>`,
		"fallback": "stash:gif-light",
	});
}

export default Component;
