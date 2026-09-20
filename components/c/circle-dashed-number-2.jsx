import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3nojpbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3nojpbsy"/>`,
		"fallback": "tabler:circle-dashed-number-2",
	});
}

export default Component;
