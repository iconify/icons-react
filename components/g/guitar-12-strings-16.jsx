import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eajvrw2xf.css';
import '../../css/g/gdkovxbre.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eajvrw2xf"/><path class="gdkovxbre"/>`,
		"fallback": "qlementine-icons:guitar-12-strings-16",
	});
}

export default Component;
