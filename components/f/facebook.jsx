import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlag4hbsz.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlag4hbsz"/>`,
		"fallback": "il:facebook",
	});
}

export default Component;
