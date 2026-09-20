import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlan15w3z.css';
import '../../css/g/ghlqhy24c.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlan15w3z"/><path class="ghlqhy24c"/>`,
		"fallback": "lineicons:graph",
	});
}

export default Component;
