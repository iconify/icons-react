import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/m2nn7f-kd.css';
import '../../css/e/eb2qabupy.css';
import '../../css/q/qw6touosl.css';
import '../../css/a/axkwzobnu.css';
import '../../css/s/sue7oxb6n.css';
import '../../css/t/tl2gs1psu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="m2nn7f-kd wm-deco"/><path class="eb2qabupy wm-deco"/><path class="qw6touosl wm-k"/><path class="axkwzobnu wm-a"/><path class="sue7oxb6n wm-k"/><path class="tl2gs1psu wm-a"/></g>`,
		"fallback": "withicons:corner-up-right-blueprint",
	});
}

export default Component;
