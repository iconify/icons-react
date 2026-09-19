import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9goa4bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g9goa4bbl"/>`,
		"fallback": "heroicons:bars-arrow-down-solid",
	});
}

export default Component;
