import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncg7hj_sr.css';
import '../../css/p/ptfkkxbvh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncg7hj_sr"/><path class="ptfkkxbvh"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-film-player",
	});
}

export default Component;
