import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwqp_tb_b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwqp_tb_b"/>`,
		"fallback": "formkit:apple",
	});
}

export default Component;
