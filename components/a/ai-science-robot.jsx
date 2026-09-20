import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/b/bf53s552u.css';
import '../../css/c/chv70ybrw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="bf53s552u"/><path class="chv70ybrw"/></g>`,
		"fallback": "streamline-plump:ai-science-robot",
	});
}

export default Component;
