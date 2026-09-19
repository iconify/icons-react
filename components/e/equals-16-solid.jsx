import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnfvhmycx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tnfvhmycx"/>`,
		"fallback": "heroicons:equals-16-solid",
	});
}

export default Component;
