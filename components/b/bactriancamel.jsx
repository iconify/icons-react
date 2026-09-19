import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvo1o4byr.css';
import '../../css/q/qzwrsetpw.css';
import '../../css/z/z8xma-crw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvo1o4byr"/><path class="qzwrsetpw"/><path class="z8xma-crw"/>`,
		"fallback": "fxemoji:bactriancamel",
	});
}

export default Component;
