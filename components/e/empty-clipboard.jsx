import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fvxi5gcwy.css';
import '../../css/o/o2lgrpb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fvxi5gcwy"/><path class="o2lgrpb8j"/></g>`,
		"fallback": "streamline-sharp:empty-clipboard",
	});
}

export default Component;
