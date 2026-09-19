import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw5f-kbku.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xw5f-kbku"/>`,
		"fallback": "heroicons:calendar-16-solid",
	});
}

export default Component;
