import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v40qs34fv.css';
import '../../css/a/avlbzl6tg.css';
import '../../css/n/nu63srbet.css';
import '../../css/c/c97rv7b9j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v40qs34fv"/><path class="avlbzl6tg"/><path class="nu63srbet"/><path class="c97rv7b9j"/></g>`,
		"fallback": "streamline-flex-color:ice-cream-2",
	});
}

export default Component;
