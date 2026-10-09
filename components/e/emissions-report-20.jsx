import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezhonm73e.css';
import '../../css/w/wizc1jb8y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezhonm73e"/><path class="wizc1jb8y"/>`,
		"fallback": "energy-icons:emissions-report-20",
	});
}

export default Component;
