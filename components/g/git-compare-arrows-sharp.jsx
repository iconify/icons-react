import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7s5tybmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7s5tybmk"/>`,
		"fallback": "keyline-icons:git-compare-arrows-sharp",
	});
}

export default Component;
