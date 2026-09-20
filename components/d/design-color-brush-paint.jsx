import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7rxfh69l.css';
import '../../css/f/f1o3zmzsp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7rxfh69l"/><path class="f1o3zmzsp"/>`,
		"fallback": "streamline-pixel:design-color-brush-paint",
	});
}

export default Component;
