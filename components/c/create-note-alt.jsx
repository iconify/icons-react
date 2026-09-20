import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qa624hbfk.css';
import '../../css/c/cv2o93n5t.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="qa624hbfk"/><path class="cv2o93n5t"/></g>`,
		"fallback": "marketeq:create-note-alt",
	});
}

export default Component;
