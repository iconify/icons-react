import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwlud-5vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwlud-5vw"/>`,
		"fallback": "keyline-icons:corner-left-up-sharp",
	});
}

export default Component;
