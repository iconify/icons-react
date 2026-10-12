import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tcer9tb5t.css';
import '../../css/t/tnod1j2fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tcer9tb5t"/><path class="tnod1j2fa"/></g>`,
		"fallback": "lucide-extended:bandage-duotone",
	});
}

export default Component;
