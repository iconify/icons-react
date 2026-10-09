import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3wq640fi.css';
import '../../css/x/x59ggbc2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3wq640fi"/><path class="x59ggbc2f"/>`,
		"fallback": "energy-icons:hanger-48",
	});
}

export default Component;
