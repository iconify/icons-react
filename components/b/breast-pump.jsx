import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ix3kq6qfw.css';
import '../../css/m/m9bppyvts.css';
import '../../css/o/omoqg1bql.css';
import '../../css/k/kucqx858u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ix3kq6qfw"/><path class="m9bppyvts"/><path class="omoqg1bql"/><path class="kucqx858u"/></g>`,
		"fallback": "icon-park:breast-pump",
	});
}

export default Component;
