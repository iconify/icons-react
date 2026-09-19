import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xree5zkbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xree5zkbl"/>`,
		"fallback": "heroicons:building-office-solid",
	});
}

export default Component;
