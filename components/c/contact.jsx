import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bmha0mb_p.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/j/jhxi-trnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bmha0mb_p"/><circle class="zv6cqnbnp"/><rect class="jhxi-trnl"/></g>`,
		"fallback": "lucide:contact",
	});
}

export default Component;
