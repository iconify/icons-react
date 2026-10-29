import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdvez0bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdvez0bnc"/>`,
		"fallback": "withicons:euro-solid",
	});
}

export default Component;
