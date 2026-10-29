import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ejrauv4gk.css';
import '../../css/h/hadl-ib6c.css';
import '../../css/x/xfjk5rbmg.css';
import '../../css/u/uhjj-5r8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ejrauv4gk"/><path class="hadl-ib6c wm-a"/><path class="wm-k xfjk5rbmg"/><path class="uhjj-5r8y wm-a"/></g>`,
		"fallback": "withicons:file-image-sketch",
	});
}

export default Component;
