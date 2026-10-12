import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bhpz2sbpn.css';
import '../../css/z/zjr4rubih.css';
import '../../css/k/k7jxl76jg.css';
import '../../css/s/s6347ob1z.css';
import '../../css/c/c-4hhbbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bhpz2sbpn"/><path class="zjr4rubih"/><path class="k7jxl76jg"/><path class="s6347ob1z"/><path class="c-4hhbbot"/></g>`,
		"fallback": "lucide-extended:git-branch-plus-duotone",
	});
}

export default Component;
