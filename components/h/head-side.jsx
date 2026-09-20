import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj_jdibkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj_jdibkq"/>`,
		"fallback": "uil:head-side",
	});
}

export default Component;
