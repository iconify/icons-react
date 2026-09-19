import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mjp3b5b5u.css';
import '../../css/h/hitb2acsr.css';
import '../../css/c/cq4u8c4rd.css';
import '../../css/q/qwnv0ccim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="mjp3b5b5u"/><path class="hitb2acsr"/><path class="cq4u8c4rd"/><path class="qwnv0ccim"/></g>`,
		"fallback": "icon-park:airpods",
	});
}

export default Component;
