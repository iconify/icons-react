import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/m/mtuu6g8bm.css';
import '../../css/s/stf0rj2tw.css';
import '../../css/s/s3fefubqk.css';
import '../../css/i/ixlphob6i.css';
import '../../css/g/g4wru1bvy.css';
import '../../css/f/f3fe7zlbp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="mtuu6g8bm"/><path class="stf0rj2tw"/><path class="s3fefubqk"/><path class="ixlphob6i"/><path class="g4wru1bvy"/><path class="f3fe7zlbp"/></g>`,
		"fallback": "icon-park:bottle-two",
	});
}

export default Component;
