import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex2q5ac-h.css';
import '../../css/q/qx-gtmbtz.css';
import '../../css/w/wchna4n6h.css';
import '../../css/p/pj97ij9re.css';
import '../../css/d/dktgzpbmg.css';
import '../../css/l/l8c_gdcto.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ex2q5ac-h"/><path class="qx-gtmbtz"/><path class="wchna4n6h"/><path class="pj97ij9re"/><path class="dktgzpbmg"/><path class="l8c_gdcto"/></g>`,
		"fallback": "fluent-emoji-flat:card-index-dividers",
	});
}

export default Component;
