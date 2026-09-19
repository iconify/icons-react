import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhgo_4b9l.css';
import '../../css/b/bsyilto9j.css';
import '../../css/b/b9l5fkb3p.css';
import '../../css/v/vaskeh6cv.css';
import '../../css/r/rn94ev8fr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="rhgo_4b9l"/><path class="bsyilto9j"/><circle class="b9l5fkb3p"/><circle class="vaskeh6cv"/><path class="rn94ev8fr"/></g>`,
		"fallback": "icon-park-outline:bus-one",
	});
}

export default Component;
