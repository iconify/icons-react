import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzhr5bbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mzhr5bbxa"/>`,
		"fallback": "griddy-icons:calendar-left-filled",
	});
}

export default Component;
