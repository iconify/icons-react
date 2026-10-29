import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/grr76eb_c.css';
import '../../css/u/u9i7zubab.css';
import '../../css/n/nge5cfbll.css';
import '../../css/y/y-6gv1b7f.css';
import '../../css/w/wcpe8eb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="grr76eb_c wm-deco"/><path class="u9i7zubab wm-deco"/><path class="nge5cfbll wm-deco"/><path class="wm-k y-6gv1b7f"/><path class="wcpe8eb7b wm-a"/></g>`,
		"fallback": "withicons:car-front-blueprint",
	});
}

export default Component;
