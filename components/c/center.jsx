import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs30_xv-g.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs30_xv-g"/>`,
		"fallback": "picon:center",
	});
}

export default Component;
