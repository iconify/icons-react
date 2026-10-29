import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzwk4_bwa.css';
import '../../css/n/nys28xbkx.css';
import '../../css/p/pwvf_k0fm.css';
import '../../css/d/d9wk5wbku.css';
import '../../css/i/ie18tzvon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mzwk4_bwa wm-k"/><path class="nys28xbkx wm-k"/><path class="pwvf_k0fm wm-k"/><path class="d9wk5wbku wm-shine"/><path class="ie18tzvon wm-a"/></g>`,
		"fallback": "withicons-anime:help-circle",
	});
}

export default Component;
