import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ulv86hb5b.css';
import '../../css/n/nuljgzbzb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ulv86hb5b"/><path class="nuljgzbzb"/></g>`,
		"fallback": "streamline-color:group-meeting-call-flat",
	});
}

export default Component;
