import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/we9b9_p-a.css';
import '../../css/q/qzzo5nbdd.css';
import '../../css/x/xcrrugbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="we9b9_p-a"/><path class="qzzo5nbdd"/><path class="xcrrugbsn"/></g>`,
		"fallback": "streamline-freehand-color:focus-camera-auto",
	});
}

export default Component;
