import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyx8pkdtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyx8pkdtg"/>`,
		"fallback": "iconaut:image-wrap-left-solid",
	});
}

export default Component;
