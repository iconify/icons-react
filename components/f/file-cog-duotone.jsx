import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kq2vh6sfu.css';
import '../../css/o/omi4i4cer.css';
import '../../css/u/uceo7lb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kq2vh6sfu"/><path class="omi4i4cer"/><path class="uceo7lb1c"/></g>`,
		"fallback": "lucide-extended:file-cog-duotone",
	});
}

export default Component;
