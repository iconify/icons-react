import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fna5jmbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fna5jmbbs"/>`,
		"fallback": "coolicons:arrow-up-left-round",
	});
}

export default Component;
