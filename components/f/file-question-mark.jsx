import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv8cbs0ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv8cbs0ht"/>`,
		"fallback": "vadivam:file-question-mark",
	});
}

export default Component;
