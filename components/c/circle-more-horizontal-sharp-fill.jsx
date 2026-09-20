import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwssri5sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwssri5sf"/>`,
		"fallback": "keyline-icons:circle-more-horizontal-sharp-fill",
	});
}

export default Component;
