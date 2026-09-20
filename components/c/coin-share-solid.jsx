import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhqe0-kgy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bhqe0-kgy"/>`,
		"fallback": "streamline-flex:coin-share-solid",
	});
}

export default Component;
