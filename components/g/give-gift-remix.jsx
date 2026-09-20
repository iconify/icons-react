import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-933vjqe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a-933vjqe"/>`,
		"fallback": "streamline-plump:give-gift-remix",
	});
}

export default Component;
