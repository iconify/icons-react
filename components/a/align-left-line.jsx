import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/crv4i00bu.css';
import '../../css/i/ijgodabew.css';
import '../../css/o/oco9_ibme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="crv4i00bu"/><rect class="ijgodabew"/><rect class="oco9_ibme"/></g>`,
		"fallback": "majesticons:align-left-line",
	});
}

export default Component;
