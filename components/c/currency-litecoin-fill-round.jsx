import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhcx4ioui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhcx4ioui"/>`,
		"fallback": "coolicons:currency-litecoin-fill-round",
	});
}

export default Component;
