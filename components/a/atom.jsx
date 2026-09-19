import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdp02hb8k.css';

const viewBox = {"width":26,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdp02hb8k"/>`,
		"fallback": "fontisto:atom",
	});
}

export default Component;
