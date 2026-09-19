import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jr6yjfblw.css';
import '../../css/p/pysnh8b9c.css';
import '../../css/f/feacjibdb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="jr6yjfblw"/><path class="pysnh8b9c"/><path class="feacjibdb"/></g>`,
		"fallback": "icon-park:clothes-diapers",
	});
}

export default Component;
