import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2cuv6b7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z2cuv6b7g"/>`,
		"fallback": "streamline:dice-6-remix",
	});
}

export default Component;
