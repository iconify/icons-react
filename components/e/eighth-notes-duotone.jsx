import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vdxv6p96c.css';
import '../../css/k/k7jxl76jg.css';
import '../../css/s/s6347ob1z.css';
import '../../css/g/g626vrb-t.css';
import '../../css/a/ajtvmoh5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vdxv6p96c"/><path class="k7jxl76jg"/><path class="s6347ob1z"/><path class="g626vrb-t"/><path class="ajtvmoh5p"/></g>`,
		"fallback": "lucide-extended:eighth-notes-duotone",
	});
}

export default Component;
