import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkk5o7gkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkk5o7gkv"/>`,
		"fallback": "tabler:circle-i",
	});
}

export default Component;
