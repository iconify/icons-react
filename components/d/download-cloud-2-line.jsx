import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbf4n400f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbf4n400f"/>`,
		"fallback": "ri:download-cloud-2-line",
	});
}

export default Component;
