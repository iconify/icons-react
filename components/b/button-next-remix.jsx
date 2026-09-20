import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dctws6vgw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dctws6vgw"/>`,
		"fallback": "streamline:button-next-remix",
	});
}

export default Component;
