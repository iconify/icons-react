import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/ojkoemb6l.css';
import '../../css/j/jfa1hib1m.css';
import '../../css/a/abt2d41ld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ojkoemb6l"/><path class="jfa1hib1m"/><path class="abt2d41ld"/></g>`,
		"fallback": "icon-park:inline",
	});
}

export default Component;
