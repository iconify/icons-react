import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixj9blbxv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ixj9blbxv"/>`,
		"fallback": "heroicons:bell-snooze-16-solid",
	});
}

export default Component;
