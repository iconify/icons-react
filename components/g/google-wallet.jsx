import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui2ki_b6q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui2ki_b6q"/>`,
		"fallback": "fa7-brands:google-wallet",
	});
}

export default Component;
