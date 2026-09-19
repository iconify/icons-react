import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_bai2k1u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_bai2k1u"/>`,
		"fallback": "ant-design:delete",
	});
}

export default Component;
