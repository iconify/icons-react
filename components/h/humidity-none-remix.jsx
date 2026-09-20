import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5z_v5bfd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o5z_v5bfd"/>`,
		"fallback": "streamline:humidity-none-remix",
	});
}

export default Component;
