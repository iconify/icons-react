import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixktuwbjo.css';
import '../../css/c/cvfddkb1b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixktuwbjo"/><path class="cvfddkb1b"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-chipset",
	});
}

export default Component;
