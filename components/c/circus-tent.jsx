import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/avqhfpbgi.css';
import '../../css/k/kvwf7kp5i.css';
import '../../css/g/gz66z6bjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="avqhfpbgi"/><path class="kvwf7kp5i"/><path class="gz66z6bjj"/></g>`,
		"fallback": "streamline-freehand:circus-tent",
	});
}

export default Component;
