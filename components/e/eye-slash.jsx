import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk8mgdcsv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk8mgdcsv"/>`,
		"fallback": "fa7-regular:eye-slash",
	});
}

export default Component;
