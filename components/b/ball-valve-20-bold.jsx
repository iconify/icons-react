import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihdo3z29c.css';
import '../../css/i/itsf3wbas.css';
import '../../css/a/astq4bb3x.css';
import '../../css/v/vf565cbtz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihdo3z29c"/><path class="itsf3wbas"/><path class="astq4bb3x"/><path class="vf565cbtz"/>`,
		"fallback": "energy-icons:ball-valve-20-bold",
	});
}

export default Component;
