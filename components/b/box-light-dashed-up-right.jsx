import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqw21yb_s.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqw21yb_s"/>`,
		"fallback": "memory:box-light-dashed-up-right",
	});
}

export default Component;
