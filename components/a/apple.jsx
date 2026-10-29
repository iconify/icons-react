import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgpj70gsv.css';
import '../../css/w/w9roay2om.css';
import '../../css/r/rw-zvrb5l.css';
import '../../css/b/bxpm86bkk.css';
import '../../css/h/hx27tko-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgpj70gsv wm-a"/><path class="w9roay2om wm-a"/><path class="rw-zvrb5l wm-k"/><path class="bxpm86bkk wm-k"/><path class="hx27tko-b wm-k"/>`,
		"fallback": "withicons-bauhaus:apple",
	});
}

export default Component;
