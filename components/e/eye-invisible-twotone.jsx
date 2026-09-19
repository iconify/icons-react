import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqc4g8brr.css';
import '../../css/p/pjqyt7b_n.css';
import '../../css/g/gi_7ztbfp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqc4g8brr"/><path class="pjqyt7b_n"/><path class="gi_7ztbfp"/>`,
		"fallback": "ant-design:eye-invisible-twotone",
	});
}

export default Component;
