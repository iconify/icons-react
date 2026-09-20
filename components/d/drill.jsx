import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gatb3yblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gatb3yblh"/>`,
		"fallback": "lucide:drill",
	});
}

export default Component;
