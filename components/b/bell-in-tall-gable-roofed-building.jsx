import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvdl01b3e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvdl01b3e"/>`,
		"fallback": "pinhead:bell-in-tall-gable-roofed-building",
	});
}

export default Component;
