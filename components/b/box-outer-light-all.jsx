import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as7zp-tqq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as7zp-tqq"/>`,
		"fallback": "memory:box-outer-light-all",
	});
}

export default Component;
