import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o6ofitb4u.css';
import '../../css/i/iugebqb7g.css';
import '../../css/i/ivw0slbcd.css';
import '../../css/y/yarof0bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o6ofitb4u"/><path class="iugebqb7g"/><path clip-rule="evenodd" class="ivw0slbcd"/><path clip-rule="evenodd" class="yarof0bzk"/></g>`,
		"fallback": "streamline-freehand-color:database-settings",
	});
}

export default Component;
