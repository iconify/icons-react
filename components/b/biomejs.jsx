import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgfp4ebof.css';
import '../../css/i/ipz-bu3ya.css';

const viewBox = {"width":64,"height":55.425};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="pgfp4ebof"/><path class="ipz-bu3ya"/>`,
		"fallback": "thesvg-color:biomejs",
	});
}

export default Component;
