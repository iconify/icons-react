import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmtm7pz0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmtm7pz0d"/>`,
		"fallback": "ri:bread-line",
	});
}

export default Component;
