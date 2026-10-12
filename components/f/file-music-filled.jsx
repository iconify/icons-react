import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt1hwd0eh.css';
import '../../css/l/l2zpy5eyh.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt1hwd0eh"/><path class="l2zpy5eyh"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-music-filled",
	});
}

export default Component;
