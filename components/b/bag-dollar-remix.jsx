import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwtdnm28k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kwtdnm28k"/>`,
		"fallback": "streamline:bag-dollar-remix",
	});
}

export default Component;
