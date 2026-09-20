import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lkjyl7b_d.css';
import '../../css/y/yw2cpq6yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lkjyl7b_d"/><path class="yw2cpq6yz"/></g>`,
		"fallback": "streamline-sharp:hearing-deaf-1",
	});
}

export default Component;
