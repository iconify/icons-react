import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ie78mpbdc.css';
import '../../css/o/or3-hobii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ie78mpbdc"/><path class="or3-hobii"/></g>`,
		"fallback": "streamline-sharp-color:horizontal-toggle-button-flat",
	});
}

export default Component;
