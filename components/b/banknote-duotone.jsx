import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aq8lyzp4d.css';
import '../../css/c/cj2g5-b5u.css';
import '../../css/h/hmmcrtbfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aq8lyzp4d"/><path class="cj2g5-b5u"/><path class="hmmcrtbfk"/></g>`,
		"fallback": "lucide-extended:banknote-duotone",
	});
}

export default Component;
