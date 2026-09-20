import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fzg-nyb4e.css';
import '../../css/s/s6d007y7k.css';
import '../../css/c/c3jjas9nf.css';
import '../../css/i/id2d1md9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fzg-nyb4e"/><path class="s6d007y7k"/><path class="c3jjas9nf"/><path class="id2d1md9u"/></g>`,
		"fallback": "tdesign:button",
	});
}

export default Component;
