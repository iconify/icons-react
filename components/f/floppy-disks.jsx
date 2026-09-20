import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hfqqtdbyx.css';
import '../../css/a/afsdp6fkc.css';
import '../../css/t/t3w8yqyck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hfqqtdbyx"/><path class="afsdp6fkc"/><path class="t3w8yqyck"/></g>`,
		"fallback": "lucide-lab:floppy-disks",
	});
}

export default Component;
