import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ovv3xj11u.css';
import '../../css/g/g6wanyb_h.css';
import '../../css/s/soubbjdbd.css';
import '../../css/m/mfj_y8bck.css';
import '../../css/l/l9fwkzbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ovv3xj11u"/><path class="g6wanyb_h"/><circle class="soubbjdbd"/><path class="mfj_y8bck"/><circle class="l9fwkzbqr"/></g>`,
		"fallback": "lucide:file-audio-2",
	});
}

export default Component;
