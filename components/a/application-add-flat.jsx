import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h48p_2jgs.css';
import '../../css/q/q4ii-72pv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h48p_2jgs"/><path class="q4ii-72pv"/></g>`,
		"fallback": "streamline-sharp-color:application-add-flat",
	});
}

export default Component;
