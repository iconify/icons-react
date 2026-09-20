import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b567_7cwo.css';
import '../../css/b/bjvvaub8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b567_7cwo"/><path class="bjvvaub8j"/></g>`,
		"fallback": "streamline-sharp-color:decent-work-and-economic-growth-flat",
	});
}

export default Component;
