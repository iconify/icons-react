import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ih1_axzgg.css';
import '../../css/a/ah05kygxw.css';
import '../../css/h/h1qy9y-ng.css';
import '../../css/i/i134pbq3l.css';
import '../../css/r/rechsfd8t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ih1_axzgg"/><path class="ah05kygxw"/><path class="h1qy9y-ng"/><path class="i134pbq3l"/><path class="rechsfd8t"/></g>`,
		"fallback": "icon-park:diapers-one",
	});
}

export default Component;
