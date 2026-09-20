import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zs47c3big.css';
import '../../css/c/caa5pt7fn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zs47c3big"/><path class="caa5pt7fn"/></g>`,
		"fallback": "streamline-sharp:double-bookmark",
	});
}

export default Component;
