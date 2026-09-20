import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr9hgly8x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cr9hgly8x"/>`,
		"fallback": "streamline-flex:cellular-network-lte-solid",
	});
}

export default Component;
