import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/i/iw6-q-13t.css';
import '../../css/o/o15p3n8tr.css';
import '../../css/w/wwihdt6ps.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="iw6-q-13t"/><path class="o15p3n8tr"/><path class="wwihdt6ps"/></g>`,
		"fallback": "streamline-kameleon-color:favorite-file",
	});
}

export default Component;
