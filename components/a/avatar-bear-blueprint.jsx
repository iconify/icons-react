import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ekj4u08vh.css';
import '../../css/g/g34r-gbul.css';
import '../../css/t/t218te2ox.css';
import '../../css/b/b359zbj2i.css';
import '../../css/i/ipyhocc7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ekj4u08vh wm-deco"/><path class="g34r-gbul wm-deco"/><path class="t218te2ox wm-deco"/><path class="b359zbj2i wm-k"/><path class="ipyhocc7k wm-a"/></g>`,
		"fallback": "withicons:avatar-bear-blueprint",
	});
}

export default Component;
