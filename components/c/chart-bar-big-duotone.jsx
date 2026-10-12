import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/slcgv9bsj.css';
import '../../css/a/a814_vg9v.css';
import '../../css/j/jk7xkwbum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="slcgv9bsj"/><path class="a814_vg9v"/><path class="jk7xkwbum"/></g>`,
		"fallback": "lucide-extended:chart-bar-big-duotone",
	});
}

export default Component;
