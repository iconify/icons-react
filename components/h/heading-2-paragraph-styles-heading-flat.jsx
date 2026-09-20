import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7-vabcui.css';
import '../../css/m/m9f971dsh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l7-vabcui"/><path class="m9f971dsh"/></g>`,
		"fallback": "streamline-color:heading-2-paragraph-styles-heading-flat",
	});
}

export default Component;
