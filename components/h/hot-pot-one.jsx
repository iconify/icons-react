import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/p/p309szbyn.css';
import '../../css/q/qjunyybpn.css';
import '../../css/j/jq3ltpbcw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="p309szbyn"/><path class="qjunyybpn"/><path class="jq3ltpbcw"/></g>`,
		"fallback": "icon-park-outline:hot-pot-one",
	});
}

export default Component;
