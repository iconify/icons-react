import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9ojsnb7p.css';
import '../../css/f/fkvrrkbqg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g9ojsnb7p"/><path class="fkvrrkbqg"/></g>`,
		"fallback": "fluent-emoji-high-contrast:compass",
	});
}

export default Component;
