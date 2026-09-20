import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rd5tj8ble.css';
import '../../css/w/whrd4ib9l.css';
import '../../css/n/ni7jvgb_f.css';
import '../../css/b/b6f-teahv.css';
import '../../css/s/syw26sb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rd5tj8ble"/><path class="whrd4ib9l"/><path class="ni7jvgb_f"/><path class="b6f-teahv"/><path class="syw26sb_m"/></g>`,
		"fallback": "streamline-cyber-color:delivery-package-open",
	});
}

export default Component;
