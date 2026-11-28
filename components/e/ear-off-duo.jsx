import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g11d8ebst.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jwgngrfit.css';
import '../../css/k/kz2jgdb-f.css';
import '../../css/o/ohpg7ib8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g11d8ebst secondary"/><g class="dt0cm9dhy primary"><path class="jwgngrfit"/><path class="kz2jgdb-f"/><path class="ohpg7ib8w"/></g>`,
		"fallback": "iconaut:ear-off-duo",
	});
}

export default Component;
