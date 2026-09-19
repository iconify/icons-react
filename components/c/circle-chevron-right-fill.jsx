import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxrmtyu_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bxrmtyu_n"/>`,
		"fallback": "akar-icons:circle-chevron-right-fill",
	});
}

export default Component;
