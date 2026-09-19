import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ijfjub_ox.css';
import '../../css/q/q024b5bys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ijfjub_ox"/><path class="q024b5bys"/></g>`,
		"fallback": "healthicons:coughing-alt",
	});
}

export default Component;
