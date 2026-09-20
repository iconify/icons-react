import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl8i0-bnz.css';
import '../../css/c/cnn8c6pbg.css';
import '../../css/d/donjoukqx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl8i0-bnz"/><path class="cnn8c6pbg"/><path class="donjoukqx"/>`,
		"fallback": "streamline-pixel:design-color-palette-sample",
	});
}

export default Component;
