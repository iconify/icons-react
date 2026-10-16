import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne1xvo82d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne1xvo82d"/>`,
		"fallback": "energy-icons:infrared-panel-20",
	});
}

export default Component;
