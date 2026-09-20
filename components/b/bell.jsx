import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pphbv6qxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pphbv6qxe"/>`,
		"fallback": "vadivam:bell",
	});
}

export default Component;
