import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlb3uob7u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlb3uob7u"/>`,
		"fallback": "garden:arrow-box-right-20",
	});
}

export default Component;
