import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jr8ztkieh.css';
import '../../css/a/a2aqf-btj.css';
import '../../css/j/jj-j86stw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jr8ztkieh"/><path class="a2aqf-btj"/><path class="jj-j86stw"/></g>`,
		"fallback": "lucide-extended:eighth-note-duotone",
	});
}

export default Component;
