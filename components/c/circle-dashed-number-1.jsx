import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frn3o4jqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frn3o4jqk"/>`,
		"fallback": "tabler:circle-dashed-number-1",
	});
}

export default Component;
