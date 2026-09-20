import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1u09r4ws.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d1u09r4ws"/>`,
		"fallback": "streamline-flex:block-2-solid",
	});
}

export default Component;
