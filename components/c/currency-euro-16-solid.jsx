import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz6yknbnq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xz6yknbnq"/>`,
		"fallback": "heroicons:currency-euro-16-solid",
	});
}

export default Component;
