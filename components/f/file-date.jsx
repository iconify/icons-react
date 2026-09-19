import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fqwagjb6j.css';
import '../../css/c/cnuln6twg.css';
import '../../css/s/sfbrjpc4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="fqwagjb6j"/><circle class="cnuln6twg"/><path class="sfbrjpc4q"/></g>`,
		"fallback": "icon-park-outline:file-date",
	});
}

export default Component;
