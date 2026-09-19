import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrlytoj6y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrlytoj6y"/>`,
		"fallback": "heroicons:ellipsis-horizontal-16-solid",
	});
}

export default Component;
