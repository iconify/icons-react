import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbcnw6b0t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbcnw6b0t"/>`,
		"fallback": "fa7-solid:circle-pause",
	});
}

export default Component;
