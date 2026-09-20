import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vdj7wdbtj.css';
import '../../css/w/w96sr1g7k.css';
import '../../css/o/o98tuxb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vdj7wdbtj"/><rect class="w96sr1g7k"/><path class="o98tuxb_h"/></g>`,
		"fallback": "lucide-lab:arrows-up-down-square",
	});
}

export default Component;
