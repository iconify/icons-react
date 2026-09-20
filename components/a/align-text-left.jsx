import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7hi0ksbs.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7hi0ksbs"/>`,
		"fallback": "lineicons:align-text-left",
	});
}

export default Component;
