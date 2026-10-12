import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s7idr4bry.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/o/o2ys6_4cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s7idr4bry"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="o2ys6_4cz"/></g>`,
		"fallback": "lucide-extended:file-archive-duotone",
	});
}

export default Component;
