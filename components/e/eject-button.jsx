import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzdlp6bkl.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/l/lj70h7b9m.css';
import '../../css/o/ozbpad-uv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzdlp6bkl"/><g class="sxsjrzbyv"><path class="lj70h7b9m"/><path class="ozbpad-uv"/></g>`,
		"fallback": "openmoji:eject-button",
	});
}

export default Component;
