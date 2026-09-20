import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn_3m2b5k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn_3m2b5k"/>`,
		"fallback": "streamline:cog",
	});
}

export default Component;
