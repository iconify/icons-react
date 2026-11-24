import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg84ptbsf.css';
import '../../css/t/tl712yvzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gg84ptbsf"/><path class="tl712yvzu"/>`,
		"fallback": "lucide-extended:alarm-clock-filled",
	});
}

export default Component;
