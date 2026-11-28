import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn_0xrrua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn_0xrrua"/>`,
		"fallback": "noviair:car-clock",
	});
}

export default Component;
