import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz_g4p0av.css';
import '../../css/i/it32d3oxr.css';
import '../../css/i/i9yivv3lq.css';
import '../../css/f/fkxtwmbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz_g4p0av wm-k"/><path class="it32d3oxr wm-a"/><path class="i9yivv3lq wm-a"/><path class="fkxtwmbdp wm-a"/>`,
		"fallback": "withicons-bauhaus:bus",
	});
}

export default Component;
