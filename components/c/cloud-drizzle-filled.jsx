import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvdvp0-cq.css';
import '../../css/r/rii3008cf.css';
import '../../css/y/yxwk1vbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvdvp0-cq"/><path class="rii3008cf"/><path class="yxwk1vbdi"/>`,
		"fallback": "lucide-extended:cloud-drizzle-filled",
	});
}

export default Component;
