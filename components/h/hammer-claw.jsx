import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l9zv0tb9a.css';
import '../../css/u/uz0ljaczd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l9zv0tb9a"/><path class="uz0ljaczd"/></g>`,
		"fallback": "pepicons-pencil:hammer-claw",
	});
}

export default Component;
