import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svknz3bwq.css';
import '../../css/n/npr06hbbs.css';
import '../../css/b/bek0hpq9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="svknz3bwq"/><path class="npr06hbbs"/><path class="bek0hpq9j"/></g>`,
		"fallback": "tdesign:fish",
	});
}

export default Component;
