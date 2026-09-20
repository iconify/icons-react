import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ick21ib3p.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ick21ib3p"/>`,
		"fallback": "memory:box-outer-light-dashed-up-down-right",
	});
}

export default Component;
