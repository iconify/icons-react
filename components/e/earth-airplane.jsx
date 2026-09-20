import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mvp00wavf.css';
import '../../css/s/s7eewccbp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mvp00wavf"/><path class="s7eewccbp"/></g>`,
		"fallback": "streamline:earth-airplane",
	});
}

export default Component;
