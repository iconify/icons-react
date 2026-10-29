import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/ploj10bjh.css';
import '../../css/i/is9ah22yz.css';
import '../../css/q/qvltmxb0q.css';
import '../../css/b/b9pyc9jsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ploj10bjh wm-k"/><path class="is9ah22yz wm-a"/><path class="qvltmxb0q wm-k"/><path class="b9pyc9jsm wm-a"/></g>`,
		"fallback": "withicons:clover-sketch",
	});
}

export default Component;
