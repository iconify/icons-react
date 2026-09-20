import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm9nwob-m.css';
import '../../css/h/hnglj9b8d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm9nwob-m"/><path clip-rule="evenodd" class="hnglj9b8d"/>`,
		"fallback": "streamline:car-taxi-1-solid",
	});
}

export default Component;
