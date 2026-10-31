import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4a4etp8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4a4etp8c"/>`,
		"fallback": "coolicons:ambulance-round",
	});
}

export default Component;
