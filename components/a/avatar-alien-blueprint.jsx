import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bqh72_gvx.css';
import '../../css/k/k0fezooqa.css';
import '../../css/n/nqwgjqbun.css';
import '../../css/m/m1gcnublb.css';
import '../../css/h/hmmmdtboo.css';
import '../../css/s/s1kut8o6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bqh72_gvx wm-deco"/><path class="k0fezooqa wm-deco"/><path class="nqwgjqbun wm-deco"/><path class="m1gcnublb wm-k"/><path class="hmmmdtboo wm-a"/><path class="s1kut8o6j wm-s"/></g>`,
		"fallback": "withicons:avatar-alien-blueprint",
	});
}

export default Component;
