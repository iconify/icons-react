import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/t/tic4w_4kd.css';
import '../../css/x/xcezv92mw.css';
import '../../css/f/fl4499wyq.css';
import '../../css/z/zr-s8dcqt.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="tic4w_4kd"/><path class="xcezv92mw"/><path class="fl4499wyq"/><path class="zr-s8dcqt"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-panama",
	});
}

export default Component;
