import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7z2-nmdg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7z2-nmdg"/>`,
		"fallback": "nonicons:dart-16",
	});
}

export default Component;
