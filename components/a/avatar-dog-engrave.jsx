import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w5vc88boi.css';
import '../../css/m/meluy5hfc.css';
import '../../css/v/vsusckuge.css';
import '../../css/t/t-02dgcuh.css';
import '../../css/j/j5bkt9bua.css';
import '../../css/n/n9cx9hbme.css';
import '../../css/i/ijxkoo20y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w5vc88boi wm-k"/><path class="meluy5hfc wm-shadow"/><path class="vsusckuge wm-k"/><path class="t-02dgcuh wm-k"/><path class="j5bkt9bua wm-a"/><path class="n9cx9hbme wm-k"/><path class="ijxkoo20y wm-k"/></g>`,
		"fallback": "withicons:avatar-dog-engrave",
	});
}

export default Component;
