import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v8qjwlxeq.css';
import '../../css/n/nn04bwbom.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/a/az6nf_bxe.css';
import '../../css/s/shte9bcuj.css';
import '../../css/u/u46tsabph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="v8qjwlxeq wm-deco"/><path class="nn04bwbom wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="az6nf_bxe wm-k"/><path class="shte9bcuj wm-a"/><path class="u46tsabph wm-k"/></g>`,
		"fallback": "withicons:bell-blueprint",
	});
}

export default Component;
