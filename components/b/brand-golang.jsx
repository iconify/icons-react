import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw0sli3kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw0sli3kg"/>`,
		"fallback": "tabler:brand-golang",
	});
}

export default Component;
