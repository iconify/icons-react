import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtvcw1bvs.css';
import '../../css/f/f5u8_gz6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtvcw1bvs"/><path class="f5u8_gz6g"/>`,
		"fallback": "bxs:graduation",
	});
}

export default Component;
