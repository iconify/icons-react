import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-3qw_iec.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-3qw_iec"/>`,
		"fallback": "memory:box-light-vertical-right-stipple-up-right",
	});
}

export default Component;
