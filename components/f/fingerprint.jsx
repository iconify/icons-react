import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/olmr4lb5h.css';
import '../../css/w/wxnbb-vib.css';
import '../../css/f/fbavsjg8l.css';
import '../../css/w/wxky3ehdv.css';
import '../../css/g/g5l-wdttw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="olmr4lb5h"/><path class="wxnbb-vib"/><path class="fbavsjg8l"/><path class="wxky3ehdv"/><path class="g5l-wdttw"/></g>`,
		"fallback": "icon-park:fingerprint",
	});
}

export default Component;
