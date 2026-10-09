import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ona24jwrs.css';
import '../../css/x/x1xwve8uf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ona24jwrs"/><path class="x1xwve8uf"/>`,
		"fallback": "energy-icons:cast-48-bold",
	});
}

export default Component;
