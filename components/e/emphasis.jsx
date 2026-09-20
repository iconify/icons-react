import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfo_azs3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfo_azs3h"/>`,
		"fallback": "tabler:emphasis",
	});
}

export default Component;
