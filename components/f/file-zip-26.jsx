import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl7tz6c7k.css';

const viewBox = {"width":20,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl7tz6c7k"/>`,
		"fallback": "garden:file-zip-26",
	});
}

export default Component;
