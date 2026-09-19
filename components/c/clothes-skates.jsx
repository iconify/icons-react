import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g7zgwspfj.css';
import '../../css/k/km2dlbgif.css';
import '../../css/g/gzmmyqbsr.css';
import '../../css/s/sga_2fbvo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="g7zgwspfj"/><path class="km2dlbgif"/><path class="gzmmyqbsr"/><circle class="sga_2fbvo"/></g>`,
		"fallback": "icon-park:clothes-skates",
	});
}

export default Component;
