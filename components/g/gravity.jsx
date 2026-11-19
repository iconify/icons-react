import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/agsd27bib.css';
import '../../css/l/lw5b8bb6s.css';
import '../../css/f/fpk8ambbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="agsd27bib"/><path class="lw5b8bb6s"/><path class="fpk8ambbn"/></g>`,
		"fallback": "andrsrxn:gravity",
	});
}

export default Component;
