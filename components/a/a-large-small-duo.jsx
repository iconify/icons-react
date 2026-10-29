import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z50c6lbje.css';
import '../../css/p/pkmb6l7kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z50c6lbje"/><path class="pkmb6l7kq wm-a"/></g>`,
		"fallback": "withicons:a-large-small-duo",
	});
}

export default Component;
