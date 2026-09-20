import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvrk84bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvrk84bih"/>`,
		"fallback": "tabler:brand-gatsby",
	});
}

export default Component;
