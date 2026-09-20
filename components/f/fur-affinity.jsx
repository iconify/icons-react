import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btz72t84e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btz72t84e"/>`,
		"fallback": "thesvg-color:fur-affinity",
	});
}

export default Component;
