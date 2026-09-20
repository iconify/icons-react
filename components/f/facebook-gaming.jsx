import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc4uod5nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc4uod5nx"/>`,
		"fallback": "mdi:facebook-gaming",
	});
}

export default Component;
