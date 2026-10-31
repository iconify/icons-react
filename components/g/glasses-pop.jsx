import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgyhjzbke.css';
import '../../css/h/hyuty8oio.css';
import '../../css/o/ol_so7b-e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xgyhjzbke"/><path class="hyuty8oio"/><path class="ol_so7b-e"/></g>`,
		"fallback": "streamline-kameleon-color:glasses-pop",
	});
}

export default Component;
