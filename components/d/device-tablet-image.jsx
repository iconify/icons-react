import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oo-27jq7t.css';
import '../../css/k/klr9yvd7t.css';
import '../../css/p/pih7z8cbt.css';
import '../../css/o/oqq716k8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 3.77 22.3)" class="oo-27jq7t"/><path clip-rule="evenodd" class="klr9yvd7t"/><path class="pih7z8cbt"/><path class="oqq716k8c"/></g>`,
		"fallback": "andrsrxn:device-tablet-image",
	});
}

export default Component;
