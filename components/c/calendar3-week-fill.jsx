import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxmiot2cq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxmiot2cq"/>`,
		"fallback": "bi:calendar3-week-fill",
	});
}

export default Component;
