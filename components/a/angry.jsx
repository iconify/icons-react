import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnfelhtqv.css';
import '../../css/v/v-4gs6xyd.css';
import '../../css/i/ilyscnyof.css';
import '../../css/a/alwdr1bnf.css';
import '../../css/s/swu21smev.css';
import '../../css/y/y8wiycc3n.css';
import '../../css/e/e8oyx_b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mnfelhtqv wm-k"/><path class="v-4gs6xyd wm-k"/><path class="ilyscnyof wm-k"/><path class="alwdr1bnf wm-shine"/><path class="swu21smev wm-a"/><path class="wm-shine y8wiycc3n"/><path class="e8oyx_b4n wm-a"/></g>`,
		"fallback": "withicons-anime:angry",
	});
}

export default Component;
