import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ym1bzlhzg.css';
import '../../css/g/g1z28i47k.css';
import '../../css/i/is3ribb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ym1bzlhzg"/><path class="g1z28i47k"/><path class="is3ribb8c"/></g>`,
		"fallback": "streamline-freehand:graphic-tablet-intous-draw",
	});
}

export default Component;
