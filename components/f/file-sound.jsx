import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw0b-1bmv.css';
import '../../css/w/wh-70pu7h.css';
import '../../css/d/d788uf64t.css';
import '../../css/o/oe3oz-bur.css';
import '../../css/a/amcescb3m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw0b-1bmv"/><path class="wh-70pu7h"/><path class="d788uf64t"/><path class="oe3oz-bur"/><path class="amcescb3m"/>`,
		"fallback": "vaadin:file-sound",
	});
}

export default Component;
