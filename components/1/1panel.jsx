import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdbkcyrsw.css';
import '../../css/c/c7_pmq9wr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdbkcyrsw"/><path class="c7_pmq9wr"/>`,
		"fallback": "selfhst:1panel",
	});
}

export default Component;
