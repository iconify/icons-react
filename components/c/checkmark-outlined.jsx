import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/go52lxd2s.css';
import '../../css/a/a-tw77iau.css';
import '../../css/i/ispua1bus.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="go52lxd2s"/><path class="a-tw77iau"/><path class="ispua1bus"/></g>`,
		"fallback": "pepicons-pencil:checkmark-outlined",
	});
}

export default Component;
