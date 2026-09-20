import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l32lerbfx.css';
import '../../css/l/l6_t7qyjo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l32lerbfx"/><path class="l6_t7qyjo"/>`,
		"fallback": "material-icon-theme:folder-gemini-ai-open",
	});
}

export default Component;
