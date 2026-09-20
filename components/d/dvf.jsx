import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy5h9y4sa.css';
import '../../css/n/nzkrizz9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy5h9y4sa"/><path clip-rule="evenodd" class="nzkrizz9p"/>`,
		"fallback": "token:dvf",
	});
}

export default Component;
