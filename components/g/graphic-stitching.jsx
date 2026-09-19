import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6g817zjy.css';
import '../../css/q/qo28v6bij.css';
import '../../css/b/bsc52vy0g.css';
import '../../css/a/awt5ojh8g.css';
import '../../css/u/u7ddtlyot.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="o6g817zjy"><path class="qo28v6bij"/><path class="bsc52vy0g"/><path class="awt5ojh8g"/><path class="u7ddtlyot"/></g>`,
		"fallback": "icon-park:graphic-stitching",
	});
}

export default Component;
