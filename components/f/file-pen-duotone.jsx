import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mc1v07kwj.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/n/n9nesubig.css';
import '../../css/j/j55tojl3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mc1v07kwj"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="n9nesubig"/><path class="j55tojl3t"/></g>`,
		"fallback": "lucide-extended:file-pen-duotone",
	});
}

export default Component;
