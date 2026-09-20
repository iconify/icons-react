import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luh_gnorz.css';
import '../../css/o/o740cbcaj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luh_gnorz"/><path class="o740cbcaj"/>`,
		"fallback": "vaadin:alarm",
	});
}

export default Component;
