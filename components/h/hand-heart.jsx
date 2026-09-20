import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rm_x1ibzv.css';
import '../../css/l/lvnn0-p0f.css';
import '../../css/i/i0dy8zbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rm_x1ibzv"/><path class="lvnn0-p0f"/><path class="i0dy8zbbb"/></g>`,
		"fallback": "lucide:hand-heart",
	});
}

export default Component;
