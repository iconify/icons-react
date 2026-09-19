import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnfsnj21c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnfsnj21c"/>`,
		"fallback": "cbi:bulb-group-pillar-turaco-short-tall",
	});
}

export default Component;
