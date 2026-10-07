import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzaf98bbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzaf98bbw"/>`,
		"fallback": "tabler:alphabet-chinese",
	});
}

export default Component;
