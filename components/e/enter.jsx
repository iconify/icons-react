import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4hpb_b8f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4hpb_b8f"/>`,
		"fallback": "famicons:enter",
	});
}

export default Component;
