import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhllcmz3q.css';
import '../../css/g/g11id0bsr.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhllcmz3q"/><path class="g11id0bsr"/>`,
		"fallback": "lineicons:add-files",
	});
}

export default Component;
