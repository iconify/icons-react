import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3nuq6b2w.css';
import '../../css/m/m5-fa8beu.css';
import '../../css/r/rwe5l62xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e3nuq6b2w"/><path class="m5-fa8beu"/><path class="rwe5l62xc"/></g>`,
		"fallback": "tdesign:ai-cut",
	});
}

export default Component;
