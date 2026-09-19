import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2i6v5hdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2i6v5hdv"/>`,
		"fallback": "hugeicons:bookmark-off-02",
	});
}

export default Component;
