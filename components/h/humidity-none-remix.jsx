import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t950ixbth.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t950ixbth"/>`,
		"fallback": "streamline-flex:humidity-none-remix",
	});
}

export default Component;
