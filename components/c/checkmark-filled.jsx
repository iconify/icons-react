import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c_r0j1b5k.css';
import '../../css/v/vwsljt4-n.css';
import '../../css/g/go52lxd2s.css';
import '../../css/a/a-tw77iau.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c_r0j1b5k"/><path class="vwsljt4-n"/><path class="go52lxd2s"/><path class="a-tw77iau"/></g>`,
		"fallback": "pepicons-print:checkmark-filled",
	});
}

export default Component;
