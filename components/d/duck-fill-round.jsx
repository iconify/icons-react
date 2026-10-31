import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvaomu-im.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvaomu-im"/>`,
		"fallback": "coolicons:duck-fill-round",
	});
}

export default Component;
