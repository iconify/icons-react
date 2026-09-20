import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2f1anxyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2f1anxyt"/>`,
		"fallback": "pixelarticons:copy-x",
	});
}

export default Component;
