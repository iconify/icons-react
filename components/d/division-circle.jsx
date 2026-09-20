import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/srv0tukcb.css';
import '../../css/n/nr2d1sfxq.css';
import '../../css/q/q_gsde7ku.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="srv0tukcb"/><path class="nr2d1sfxq"/><path class="q_gsde7ku"/></g>`,
		"fallback": "streamline-color:division-circle",
	});
}

export default Component;
