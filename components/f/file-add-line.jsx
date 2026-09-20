import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukgok--ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukgok--ni"/>`,
		"fallback": "ri:file-add-line",
	});
}

export default Component;
