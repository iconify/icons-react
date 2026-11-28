import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyj43hb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyj43hb4p"/>`,
		"fallback": "iconaut:heart-crack-solid",
	});
}

export default Component;
