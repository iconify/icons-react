import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyt75nb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyt75nb3y"/>`,
		"fallback": "thesvg:boosty",
	});
}

export default Component;
