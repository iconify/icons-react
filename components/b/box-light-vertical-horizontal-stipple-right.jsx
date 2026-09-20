import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slc0ckb5g.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slc0ckb5g"/>`,
		"fallback": "memory:box-light-vertical-horizontal-stipple-right",
	});
}

export default Component;
