import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2d_89gyg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z2d_89gyg"/>`,
		"fallback": "streamline:heart-rate-search-remix",
	});
}

export default Component;
