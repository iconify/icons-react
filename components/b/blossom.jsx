import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fftggfa2b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fftggfa2b"/>`,
		"fallback": "icon-park-outline:blossom",
	});
}

export default Component;
