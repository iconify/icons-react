import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/glu6ctuav.css';
import '../../css/i/ih89_ofxe.css';
import '../../css/d/d-2d-2bes.css';
import '../../css/y/yhtn9ti7t.css';
import '../../css/r/rmojd5b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="glu6ctuav"/><path class="ih89_ofxe wm-a"/><path class="d-2d-2bes wm-a"/><path class="yhtn9ti7t"/><path class="rmojd5b3e wm-a"/></g>`,
		"fallback": "withicons:cake-duo",
	});
}

export default Component;
