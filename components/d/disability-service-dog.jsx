import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p89htlo_f.css';
import '../../css/f/fg9_fs2qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p89htlo_f"/><path class="fg9_fs2qi"/></g>`,
		"fallback": "streamline-freehand:disability-service-dog",
	});
}

export default Component;
