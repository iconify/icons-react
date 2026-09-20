import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xs1dcgb3w.css';
import '../../css/e/ezrebmbjv.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTJxG6b4E"><g class="ft5dv1b6b"><path class="xs1dcgb3w"/><path class="ezrebmbjv"/></g></mask></defs><path mask="url(#SVGTJxG6b4E)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:home-duotone-line",
	});
}

export default Component;
