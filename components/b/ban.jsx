import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv_4w2mzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv_4w2mzc"/>`,
		"fallback": "hugeicons:ban",
	});
}

export default Component;
