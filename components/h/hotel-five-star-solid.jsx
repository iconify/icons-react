import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c85d7-bcx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c85d7-bcx"/>`,
		"fallback": "streamline-plump:hotel-five-star-solid",
	});
}

export default Component;
