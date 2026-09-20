import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e4e68db5x.css';
import '../../css/n/nogaozbzm.css';
import '../../css/v/vs3dlvbrf.css';
import '../../css/a/a9ojdth1m.css';
import '../../css/d/dzm-twbwr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e4e68db5x"/><path class="nogaozbzm"/><path class="vs3dlvbrf"/><path class="a9ojdth1m"/><path class="dzm-twbwr"/></g>`,
		"fallback": "streamline:coins-stack",
	});
}

export default Component;
