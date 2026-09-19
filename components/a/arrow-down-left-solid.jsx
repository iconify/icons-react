import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zksh0n2lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zksh0n2lk"/>`,
		"fallback": "heroicons:arrow-down-left-solid",
	});
}

export default Component;
