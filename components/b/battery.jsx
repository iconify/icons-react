import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/ydjsgvb6x.css';
import '../../css/s/swftl2bao.css';
import '../../css/p/piw5oynek.css';
import '../../css/n/nn2sdrbun.css';
import '../../css/i/i913gobhf.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ydjsgvb6x"/><path class="swftl2bao"/><path class="piw5oynek wm-shine"/><path class="nn2sdrbun wm-k"/><path class="i913gobhf wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:battery",
	});
}

export default Component;
