import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnzewhb-u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nnzewhb-u"/>`,
		"fallback": "heroicons:bug-ant-20-solid",
	});
}

export default Component;
