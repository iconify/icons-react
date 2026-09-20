import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m32dkqkyz.css';
import '../../css/q/q9ns9f5he.css';
import '../../css/v/v3uxt06nb.css';
import '../../css/z/zxno-cv2h.css';
import '../../css/f/f4p-c0bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m32dkqkyz"/><path class="q9ns9f5he"/><path clip-rule="evenodd" class="v3uxt06nb"/><path class="zxno-cv2h"/><path class="f4p-c0bsx"/></g>`,
		"fallback": "reicon:cup-duotone",
	});
}

export default Component;
