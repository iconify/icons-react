import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htkz26b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htkz26b2v"/>`,
		"fallback": "keyline-icons:expand-dashed-down-right-sharp",
	});
}

export default Component;
