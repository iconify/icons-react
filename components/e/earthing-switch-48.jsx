import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2o-q5bqy.css';
import '../../css/v/v51dofb5w.css';
import '../../css/r/rsiohj6qn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2o-q5bqy"/><path class="v51dofb5w"/><path class="rsiohj6qn"/>`,
		"fallback": "energy-icons:earthing-switch-48",
	});
}

export default Component;
