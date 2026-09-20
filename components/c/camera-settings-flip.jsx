import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/izx1dccqx.css';
import '../../css/e/ebj5f2bdx.css';
import '../../css/u/u-dbt3usg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="izx1dccqx"/><path class="ebj5f2bdx"/><path class="u-dbt3usg"/></g>`,
		"fallback": "streamline-freehand-color:camera-settings-flip",
	});
}

export default Component;
