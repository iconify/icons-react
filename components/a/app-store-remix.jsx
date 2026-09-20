import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xszjck75g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xszjck75g"/>`,
		"fallback": "streamline:app-store-remix",
	});
}

export default Component;
