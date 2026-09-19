import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sey0_cb2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sey0_cb2n"/>`,
		"fallback": "heroicons:bug-ant-16-solid",
	});
}

export default Component;
