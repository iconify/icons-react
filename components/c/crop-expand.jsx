import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dhsydbfmg.css';
import '../../css/a/arzgyrbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dhsydbfmg"/><path class="arzgyrbkm"/></g>`,
		"fallback": "streamline-freehand:crop-expand",
	});
}

export default Component;
