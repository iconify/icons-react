import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oas2c_bnq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oas2c_bnq"/>`,
		"fallback": "roentgen:fountain",
	});
}

export default Component;
