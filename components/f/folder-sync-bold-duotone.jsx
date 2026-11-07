import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2nrf10bf.css';
import '../../css/y/y_xe1sj7j.css';
import '../../css/m/m972g7bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2nrf10bf"/><path class="y_xe1sj7j"/><path class="m972g7bwn"/>`,
		"fallback": "solar:folder-sync-bold-duotone",
	});
}

export default Component;
