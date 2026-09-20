import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xovtvfl2v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xovtvfl2v"/>`,
		"fallback": "pajamas:approval-solid",
	});
}

export default Component;
