import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq5--8b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zq5--8b_s"/>`,
		"fallback": "stash:chevron-down-solid",
	});
}

export default Component;
