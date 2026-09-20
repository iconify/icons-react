import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o6mn3xbla.css';
import '../../css/l/ls7vfsfqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o6mn3xbla"/><path class="ls7vfsfqc"/></g>`,
		"fallback": "solar:dropper-2-outline",
	});
}

export default Component;
