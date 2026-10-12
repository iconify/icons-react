import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbuw4i61g.css';
import '../../css/m/mk20stbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vbuw4i61g"/><path class="mk20stbyl"/>`,
		"fallback": "lucide-extended:eye-off-filled",
	});
}

export default Component;
