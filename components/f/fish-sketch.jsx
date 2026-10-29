import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o-1wahbgb.css';
import '../../css/y/y_kxh7h9e.css';
import '../../css/d/d-q_mmb5p.css';
import '../../css/g/glkl5e2up.css';
import '../../css/j/jz1mv3b6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="o-1wahbgb"/><path class="wm-k y_kxh7h9e"/><path class="d-q_mmb5p wm-a"/><path class="glkl5e2up wm-k"/><path class="jz1mv3b6y wm-a"/></g>`,
		"fallback": "withicons:fish-sketch",
	});
}

export default Component;
