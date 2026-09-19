import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8i80_bea.css';
import '../../css/u/ua7k7g4ui.css';
import '../../css/a/aiheh3blt.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted p8i80_bea"/><path class="clr-i-solid--alerted clr-i-solid-path-2--alerted ua7k7g4ui"/><path class="aiheh3blt clr-i-solid--alerted clr-i-solid-path-3--alerted"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-4--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:computer-solid-alerted",
	});
}

export default Component;
