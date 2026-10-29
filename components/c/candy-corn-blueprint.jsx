import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/u5qs5t_7i.css';
import '../../css/r/rda6lkqoe.css';
import '../../css/z/zjx5gxcyj.css';
import '../../css/m/madj2ihgj.css';
import '../../css/a/a4vjoxyvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="u5qs5t_7i wm-deco"/><path class="rda6lkqoe wm-deco"/><path class="wm-deco zjx5gxcyj"/><path class="madj2ihgj wm-k"/><path class="a4vjoxyvs wm-a"/></g>`,
		"fallback": "withicons:candy-corn-blueprint",
	});
}

export default Component;
