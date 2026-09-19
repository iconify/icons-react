import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkhgmop_t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkhgmop_t"/>`,
		"fallback": "cryptocurrency:abt",
	});
}

export default Component;
