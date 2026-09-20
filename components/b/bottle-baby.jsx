import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vk01mjbvz.css';
import '../../css/z/zh7uc13jj.css';
import '../../css/l/ls6ioyvmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vk01mjbvz"/><path class="zh7uc13jj"/><path class="ls6ioyvmg"/></g>`,
		"fallback": "lucide-lab:bottle-baby",
	});
}

export default Component;
