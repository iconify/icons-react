import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al8t810di.css';
import '../../css/x/xtbtl4t9z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al8t810di"/><path class="xtbtl4t9z"/>`,
		"fallback": "energy-icons:crimper-48-bold",
	});
}

export default Component;
