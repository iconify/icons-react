import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osomhcctt.css';
import '../../css/k/k7j-vcupp.css';
import '../../css/g/g-sjg9bqg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osomhcctt"/><path class="k7j-vcupp"/><path class="g-sjg9bqg"/>`,
		"fallback": "energy-icons:emergency-exit-48",
	});
}

export default Component;
