import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rxs5xloud.css';
import '../../css/d/dd9a3bcoo.css';
import '../../css/l/lqvoh0byu.css';
import '../../css/g/g6x69p_ze.css';
import '../../css/f/fm32n2byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rxs5xloud wm-deco"/><path class="dd9a3bcoo wm-deco"/><path class="lqvoh0byu wm-deco"/><path class="g6x69p_ze wm-k"/><path class="fm32n2byj wm-a"/></g>`,
		"fallback": "withicons:fish-blueprint",
	});
}

export default Component;
