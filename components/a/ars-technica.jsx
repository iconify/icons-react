import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbrvvrc7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbrvvrc7d"/>`,
		"fallback": "thesvg:ars-technica",
	});
}

export default Component;
