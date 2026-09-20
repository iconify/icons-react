import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rmruglb2g.css';
import '../../css/e/er5nrel1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rmruglb2g"/><path class="er5nrel1u"/></g>`,
		"fallback": "streamline-sharp-color:hourglass-flat",
	});
}

export default Component;
