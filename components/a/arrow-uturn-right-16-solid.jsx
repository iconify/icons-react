import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw_9so7zi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sw_9so7zi"/>`,
		"fallback": "heroicons:arrow-uturn-right-16-solid",
	});
}

export default Component;
