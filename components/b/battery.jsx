import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht81txcah.css';
import '../../css/c/crljwsbaw.css';
import '../../css/m/mpqhj5bgk.css';
import '../../css/z/z3eybkb8m.css';
import '../../css/c/cxvwwmbih.css';
import '../../css/d/d09skzbgf.css';
import '../../css/s/sbmbppbrz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht81txcah"/><path class="crljwsbaw"/><path class="mpqhj5bgk"/><path class="z3eybkb8m"/><path class="cxvwwmbih"/><path class="d09skzbgf"/><path class="sbmbppbrz"/>`,
		"fallback": "fxemoji:battery",
	});
}

export default Component;
