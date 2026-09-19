import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg5ix3lix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg5ix3lix"/>`,
		"fallback": "hugeicons:dressing-table-01",
	});
}

export default Component;
