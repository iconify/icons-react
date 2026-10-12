import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/q/q876sow0f.css';
import '../../css/o/odfnbh57b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1a2eew1e"/><path class="q876sow0f"/><path class="odfnbh57b"/></g>`,
		"fallback": "lucide-extended:columns-3-duotone",
	});
}

export default Component;
