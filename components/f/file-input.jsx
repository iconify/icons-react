import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dc62hnbry.css';
import '../../css/y/ykhlkwdwp.css';
import '../../css/s/sp6sexize.css';
import '../../css/g/g-ee1nb_p.css';
import '../../css/f/fp5onfb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dc62hnbry wm-k"/><path class="wm-shine ykhlkwdwp"/><path class="sp6sexize wm-shine"/><path class="g-ee1nb_p wm-shine"/><path class="fp5onfb9r wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-input",
	});
}

export default Component;
