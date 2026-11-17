import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/svayl4duz.css';
import '../../css/c/czyvgz04t.css';
import '../../css/r/rqzehnbrk.css';
import '../../css/r/rbffrjbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="svayl4duz"/><path class="czyvgz04t"/><path class="rqzehnbrk"/><path class="rbffrjbag"/></g>`,
		"fallback": "matita:audio-lines",
	});
}

export default Component;
