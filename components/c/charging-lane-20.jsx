import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwqc3bbdm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwqc3bbdm"/>`,
		"fallback": "energy-icons:charging-lane-20",
	});
}

export default Component;
