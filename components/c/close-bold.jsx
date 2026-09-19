import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxqxg_35p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxqxg_35p"/>`,
		"fallback": "iconamoon:close-bold",
	});
}

export default Component;
