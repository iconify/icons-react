import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/c4zha4pqg.css';
import '../../css/z/zm4a7nbhr.css';
import '../../css/y/ysb5mhoxk.css';
import '../../css/i/inyg7ob9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="c4zha4pqg wm-deco"/><path class="wm-deco zm4a7nbhr"/><path class="ysb5mhoxk"/><path class="inyg7ob9k"/></g>`,
		"fallback": "withicons:bold-blueprint",
	});
}

export default Component;
