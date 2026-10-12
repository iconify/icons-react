import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q52pyccnr.css';
import '../../css/j/jmo65nxdc.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q52pyccnr"/><path class="jmo65nxdc"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-headphone-filled",
	});
}

export default Component;
