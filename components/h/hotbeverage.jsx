import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzpan3bci.css';
import '../../css/o/ovgcn15iq.css';
import '../../css/k/kw6ok-jlw.css';
import '../../css/c/cforkdjpv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzpan3bci"/><path class="ovgcn15iq"/><path class="kw6ok-jlw"/><path class="cforkdjpv"/>`,
		"fallback": "fxemoji:hotbeverage",
	});
}

export default Component;
