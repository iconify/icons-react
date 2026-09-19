import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcxs26b9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hcxs26b9o"/>`,
		"fallback": "iconoir:bug-solid",
	});
}

export default Component;
