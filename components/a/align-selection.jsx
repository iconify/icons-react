import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mxq0yubtx.css';
import '../../css/z/z_kassb2s.css';
import '../../css/v/v0_v-zqjl.css';
import '../../css/j/j9ptcwbzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="mxq0yubtx"/><path class="z_kassb2s"/><path class="v0_v-zqjl"/><path class="j9ptcwbzw"/></g>`,
		"fallback": "streamline-plump-color:align-selection",
	});
}

export default Component;
