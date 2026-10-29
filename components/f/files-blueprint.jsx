import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lcz-43aeg.css';
import '../../css/t/t218te2ox.css';
import '../../css/y/yui4pigey.css';
import '../../css/x/x4fik1bvl.css';
import '../../css/z/zkk_e-e3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lcz-43aeg wm-deco"/><path class="t218te2ox wm-deco"/><path class="wm-k yui4pigey"/><path class="wm-a x4fik1bvl"/><path class="wm-a zkk_e-e3a"/></g>`,
		"fallback": "withicons:files-blueprint",
	});
}

export default Component;
