import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bpsdnccop.css';
import '../../css/g/g2xclxbug.css';
import '../../css/s/soc03pbkp.css';
import '../../css/f/f3tg6ebbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bpsdnccop wm-deco"/><path class="g2xclxbug wm-deco"/><path class="soc03pbkp wm-k"/><path class="f3tg6ebbt wm-a"/></g>`,
		"fallback": "withicons:ethernet-port-blueprint",
	});
}

export default Component;
