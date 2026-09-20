import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz5k5b0_d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz5k5b0_d"/>`,
		"fallback": "pinhead:cat-sitting-and-whistle",
	});
}

export default Component;
