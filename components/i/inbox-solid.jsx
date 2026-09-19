import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abat7y6yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="abat7y6yz"/>`,
		"fallback": "heroicons:inbox-solid",
	});
}

export default Component;
