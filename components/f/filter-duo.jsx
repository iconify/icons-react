import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8a6n4b0g.css';
import '../../css/o/owrwcdb_m.css';
import '../../css/h/h7tad2f8k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8a6n4b0g"/><path class="owrwcdb_m"/><path class="h7tad2f8k"/></g>`,
		"fallback": "streamline-kameleon-color:filter-duo",
	});
}

export default Component;
