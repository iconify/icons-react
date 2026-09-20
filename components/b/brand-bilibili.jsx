import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-r5g0vtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-r5g0vtw"/>`,
		"fallback": "tabler:brand-bilibili",
	});
}

export default Component;
