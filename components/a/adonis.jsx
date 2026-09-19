import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5u2o217q.css';
import '../../css/e/ejmr26sda.css';
import '../../css/o/oqxgm5b3x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x5u2o217q"><path class="ejmr26sda"/><path class="oqxgm5b3x"/></g>`,
		"fallback": "catppuccin:adonis",
	});
}

export default Component;
