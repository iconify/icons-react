import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjxocub0y.css';

const viewBox = {"width":32,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjxocub0y"/>`,
		"fallback": "thesvg-color:attio",
	});
}

export default Component;
