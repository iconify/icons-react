import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/h/hlaht7bkp.css';
import '../../css/w/w3om4-xnt.css';
import '../../css/s/sq2yiaciq.css';
import '../../css/b/bib5azb3j.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="hlaht7bkp"/><path class="w3om4-xnt"/><circle class="sq2yiaciq"/><path class="bib5azb3j"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-eritrea",
	});
}

export default Component;
