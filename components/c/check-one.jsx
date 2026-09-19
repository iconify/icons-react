import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/k/knuydr5gc.css';
import '../../css/m/mvnbjsgkc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="knuydr5gc"/><path class="mvnbjsgkc"/></g>`,
		"fallback": "icon-park:check-one",
	});
}

export default Component;
