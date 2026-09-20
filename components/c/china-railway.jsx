import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgge1nb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgge1nb0o"/>`,
		"fallback": "thesvg-color:china-railway",
	});
}

export default Component;
