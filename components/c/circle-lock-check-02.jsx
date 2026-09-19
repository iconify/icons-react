import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wzzj1qb9b.css';
import '../../css/i/i3jt6ispm.css';
import '../../css/h/htizzhbzw.css';
import '../../css/n/nsynmcdef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wzzj1qb9b"/><path class="i3jt6ispm"/><circle class="htizzhbzw"/><path class="nsynmcdef"/></g>`,
		"fallback": "hugeicons:circle-lock-check-02",
	});
}

export default Component;
