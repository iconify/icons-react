import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp9_jbb1j.css';
import '../../css/p/pnjqzgbmt.css';
import '../../css/h/hlqjywb0f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp9_jbb1j"/><path class="pnjqzgbmt"/><path class="hlqjywb0f"/>`,
		"fallback": "streamline-pixel:design-artboard-shapes",
	});
}

export default Component;
