import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/r63xy_b1u.css';
import '../../css/v/vto3d5iqg.css';
import '../../css/b/b7_3f9_2f.css';
import '../../css/h/hm_6mbcnw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="r63xy_b1u"/><path class="vto3d5iqg"/><path class="b7_3f9_2f"/><path class="hm_6mbcnw"/></g>`,
		"fallback": "streamline-plump-color:bag-suitcase-4",
	});
}

export default Component;
