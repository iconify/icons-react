import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lklvkp1im.css';
import '../../css/z/zemnm-17u.css';
import '../../css/e/e19rxxbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lklvkp1im"/><path class="zemnm-17u"/><path class="e19rxxbpp"/></g>`,
		"fallback": "streamline-freehand-color:conversation-question-warning-3",
	});
}

export default Component;
