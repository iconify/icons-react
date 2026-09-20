import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwez48b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwez48b3y"/>`,
		"fallback": "tabler:brand-npm",
	});
}

export default Component;
