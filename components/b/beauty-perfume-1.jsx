import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyz00n_yo.css';
import '../../css/o/ojcn0pbrl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyz00n_yo"/><path class="ojcn0pbrl"/>`,
		"fallback": "streamline-pixel:beauty-perfume-1",
	});
}

export default Component;
