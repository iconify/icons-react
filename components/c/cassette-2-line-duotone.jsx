import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q8qk1ms1c.css';
import '../../css/u/u5ya57buj.css';
import '../../css/e/ev2kjdshl.css';
import '../../css/r/rakuzgb5h.css';
import '../../css/v/vlz_o1knu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q8qk1ms1c"/><path class="u5ya57buj"/><path class="ev2kjdshl"/><path class="rakuzgb5h"/><path class="vlz_o1knu"/></g>`,
		"fallback": "solar:cassette-2-line-duotone",
	});
}

export default Component;
