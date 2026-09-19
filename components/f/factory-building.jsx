import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/v/vfoyb1bct.css';
import '../../css/r/ry5xqfcza.css';
import '../../css/k/kf3uc_2hy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="vfoyb1bct"/><rect class="ry5xqfcza"/><rect class="kf3uc_2hy"/></g>`,
		"fallback": "icon-park:factory-building",
	});
}

export default Component;
