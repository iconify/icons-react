import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unysilbos.css';
import '../../css/n/nyqns5dic.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="unysilbos"/><path class="nyqns5dic"/></g>`,
		"fallback": "streamline-color:christian-cross-1",
	});
}

export default Component;
