import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3wtdab_p.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3wtdab_p"/>`,
		"fallback": "memory:box-light-round-down-left-stipple-inner",
	});
}

export default Component;
