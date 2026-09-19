import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/q/qvnkb2bjl.css';
import '../../css/s/swhockboh.css';
import '../../css/x/xyg7c5_zf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="qvnkb2bjl"/><path class="swhockboh"/><path class="xyg7c5_zf"/></g>`,
		"fallback": "icon-park-outline:arithmetic-buttons",
	});
}

export default Component;
