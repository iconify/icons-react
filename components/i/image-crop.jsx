import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cvs2z244w.css';
import '../../css/p/p8hky2b0f.css';
import '../../css/j/jkrbe9b9z.css';
import '../../css/g/g3fwlbwlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cvs2z244w"/><path class="p8hky2b0f"/><path class="jkrbe9b9z"/><circle class="g3fwlbwlw"/></g>`,
		"fallback": "hugeicons:image-crop",
	});
}

export default Component;
