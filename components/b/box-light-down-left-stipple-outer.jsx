import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6bmebc1x.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6bmebc1x"/>`,
		"fallback": "memory:box-light-down-left-stipple-outer",
	});
}

export default Component;
