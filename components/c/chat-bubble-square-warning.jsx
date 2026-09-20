import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/k/kzfjwrb7m.css';
import '../../css/e/euma87bfj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="kzfjwrb7m"/><path class="euma87bfj"/></g>`,
		"fallback": "streamline-plump:chat-bubble-square-warning",
	});
}

export default Component;
