import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tlcni_utg.css';
import '../../css/b/bggbtzb-v.css';
import '../../css/m/mdhby1bqz.css';
import '../../css/c/ci8p1kzdl.css';
import '../../css/e/ec54dcajd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="tlcni_utg wm-shadow"/><path class="bggbtzb-v wm-shadow"/><path class="mdhby1bqz"/><path class="ci8p1kzdl"/><path class="ec54dcajd"/></g>`,
		"fallback": "withicons-brutal:car",
	});
}

export default Component;
