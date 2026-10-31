import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxy4eau_a.css';
import '../../css/u/uujgzzyfl.css';
import '../../css/n/nzg7_9bfw.css';
import '../../css/o/orh8ddcvx.css';
import '../../css/v/v547qdbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xxy4eau_a"/><path class="uujgzzyfl wm-shadow"/><path class="nzg7_9bfw"/><path class="orh8ddcvx"/><path class="v547qdbks"/></g>`,
		"fallback": "withicons-brutal:file-archive",
	});
}

export default Component;
