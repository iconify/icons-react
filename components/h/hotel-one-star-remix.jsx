import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x28n9pb0q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x28n9pb0q"/>`,
		"fallback": "streamline:hotel-one-star-remix",
	});
}

export default Component;
