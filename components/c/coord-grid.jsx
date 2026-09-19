import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g57i3fc6z.css';
import '../../css/e/eedc6fbmn.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g57i3fc6z"/><path class="eedc6fbmn"/>`,
		"fallback": "gis:coord-grid",
	});
}

export default Component;
