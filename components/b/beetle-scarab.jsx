import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lbdkbebfz.css';
import '../../css/l/lqm65lzzw.css';
import '../../css/b/btea2sv2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lbdkbebfz"/><path class="lqm65lzzw"/><path class="btea2sv2a"/></g>`,
		"fallback": "lucide-lab:beetle-scarab",
	});
}

export default Component;
