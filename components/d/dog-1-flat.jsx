import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b0k4isbax.css';
import '../../css/y/yyff0p0hz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b0k4isbax"/><path class="yyff0p0hz"/></g>`,
		"fallback": "streamline-flex-color:dog-1-flat",
	});
}

export default Component;
