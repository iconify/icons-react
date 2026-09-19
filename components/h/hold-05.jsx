import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za_tqlwhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za_tqlwhr"/>`,
		"fallback": "hugeicons:hold-05",
	});
}

export default Component;
