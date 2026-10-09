import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k859r6bpa.css';
import '../../css/g/gvso01jpw.css';
import '../../css/k/kezlhjxnr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k859r6bpa"/><path class="gvso01jpw"/><path class="kezlhjxnr"/>`,
		"fallback": "energy-icons:analytics-20",
	});
}

export default Component;
