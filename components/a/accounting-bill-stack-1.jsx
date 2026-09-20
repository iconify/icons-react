import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ui8npoflg.css';
import '../../css/t/tm6ivlb0n.css';
import '../../css/c/c9jkopq0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ui8npoflg"/><path class="tm6ivlb0n"/><path class="c9jkopq0e"/></g>`,
		"fallback": "streamline-ultimate:accounting-bill-stack-1",
	});
}

export default Component;
