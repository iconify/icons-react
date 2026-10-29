import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t-ku3dm-z.css';
import '../../css/w/wlj1vgb0q.css';
import '../../css/x/xmzujebsj.css';
import '../../css/n/nn2sdrbun.css';
import '../../css/g/go5n_1h8p.css';
import '../../css/j/jp-9hnyip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t-ku3dm-z wm-k"/><path class="wlj1vgb0q wm-a"/><path class="wm-shadow xmzujebsj"/><path class="nn2sdrbun wm-k"/><path class="go5n_1h8p wm-a"/><path class="jp-9hnyip wm-a"/></g>`,
		"fallback": "withicons:battery-low-engrave",
	});
}

export default Component;
