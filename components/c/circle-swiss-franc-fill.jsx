import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1bq_0bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1bq_0bwt"/>`,
		"fallback": "keyline-icons:circle-swiss-franc-fill",
	});
}

export default Component;
