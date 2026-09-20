import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yasw9kb5v.css';
import '../../css/u/u8fwfjb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yasw9kb5v"/><path class="u8fwfjb0g"/></g>`,
		"fallback": "tdesign:bug",
	});
}

export default Component;
