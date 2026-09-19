import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/x/xs2edgpyy.css';
import '../../css/g/gmlwep58s.css';
import '../../css/x/x5prrsucq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><path class="xs2edgpyy"/><path class="gmlwep58s"/><path class="x5prrsucq"/></g>`,
		"fallback": "gala:airplay",
	});
}

export default Component;
