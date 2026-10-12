import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-dwepbcd.css';
import '../../css/r/rrk1nfbye.css';
import '../../css/v/v2hkzdbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b-dwepbcd"/><path class="rrk1nfbye"/><path clip-rule="evenodd" class="v2hkzdbqr"/></g>`,
		"fallback": "lucide-extended:cog-duotone",
	});
}

export default Component;
