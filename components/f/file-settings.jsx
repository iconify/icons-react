import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fqwagjb6j.css';
import '../../css/o/orjx92biv.css';
import '../../css/m/m1mo2dbtk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="fqwagjb6j"/><circle class="orjx92biv"/><path class="m1mo2dbtk"/></g>`,
		"fallback": "icon-park-outline:file-settings",
	});
}

export default Component;
