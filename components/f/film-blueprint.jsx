import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l2mflcm2v.css';
import '../../css/g/g2xclxbug.css';
import '../../css/j/jkj5y8biz.css';
import '../../css/m/my7poevrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="l2mflcm2v wm-deco"/><path class="g2xclxbug wm-deco"/><path class="jkj5y8biz wm-k"/><path class="my7poevrw wm-a"/></g>`,
		"fallback": "withicons:film-blueprint",
	});
}

export default Component;
