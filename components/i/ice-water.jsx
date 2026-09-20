import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t600zh51a.css';
import '../../css/c/cfemc-bwk.css';
import '../../css/o/o9lrg9b8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t600zh51a"/><path class="cfemc-bwk"/><path class="o9lrg9b8g"/></g>`,
		"fallback": "streamline-ultimate-color:ice-water",
	});
}

export default Component;
