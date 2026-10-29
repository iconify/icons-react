import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk3pxabgr.css';
import '../../css/o/o3htdjb1u.css';
import '../../css/z/z38jhv0hd.css';
import '../../css/w/w35pa6bav.css';
import '../../css/b/byn737bui.css';
import '../../css/e/ed5f8fb8n.css';
import '../../css/w/w6pb63bzm.css';
import '../../css/x/xuzuwwbjk.css';
import '../../css/w/w-n0aobzb.css';
import '../../css/b/b0gxlvzfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk3pxabgr wm-shadow"/><path class="o3htdjb1u wm-k"/><path class="wm-k z38jhv0hd"/><path class="w35pa6bav wm-k"/><path class="byn737bui wm-k"/><path class="ed5f8fb8n wm-shine"/><path class="w6pb63bzm wm-k"/><path class="wm-a xuzuwwbjk"/><path class="w-n0aobzb wm-a"/><path class="b0gxlvzfl wm-a"/>`,
		"fallback": "withicons-plush:chess",
	});
}

export default Component;
