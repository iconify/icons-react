import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/voyrhpbrp.css';
import '../../css/j/jh50rubkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="voyrhpbrp"/><path class="jh50rubkc"/></g>`,
		"fallback": "lucide-extended:app-window-mac-duotone",
	});
}

export default Component;
