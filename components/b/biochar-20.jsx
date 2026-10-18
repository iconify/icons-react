import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6epwbbxl.css';
import '../../css/f/f92h2vb9i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6epwbbxl"/><path class="f92h2vb9i"/>`,
		"fallback": "energy-icons:biochar-20",
	});
}

export default Component;
