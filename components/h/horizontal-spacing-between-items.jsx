import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/w/wa2legb6c.css';
import '../../css/q/qst3jj07t.css';
import '../../css/r/rwvujus5f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="wa2legb6c"/><path class="qst3jj07t"/><path class="rwvujus5f"/></g>`,
		"fallback": "icon-park-outline:horizontal-spacing-between-items",
	});
}

export default Component;
