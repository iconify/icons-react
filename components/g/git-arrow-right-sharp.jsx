import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z24sesp2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z24sesp2x"/>`,
		"fallback": "keyline-icons:git-arrow-right-sharp",
	});
}

export default Component;
