import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi0-5b3gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zi0-5b3gv"/>`,
		"fallback": "heroicons:divide-solid",
	});
}

export default Component;
