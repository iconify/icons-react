import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj5f6ibmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj5f6ibmg"/>`,
		"fallback": "thesvg-color:codeforces",
	});
}

export default Component;
