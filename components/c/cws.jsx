import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtlmueb0q.css';
import '../../css/f/fckebnbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtlmueb0q"/><path clip-rule="evenodd" class="fckebnbbh"/>`,
		"fallback": "token:cws",
	});
}

export default Component;
