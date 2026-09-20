import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fjiiugs0p.css';
import '../../css/t/t1whsxqdu.css';
import '../../css/w/wgfaujbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fjiiugs0p"/><path class="t1whsxqdu"/><path class="wgfaujbey"/></g>`,
		"fallback": "streamline-freehand-color:business-metaphor-shark",
	});
}

export default Component;
