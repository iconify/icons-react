import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2mjsubix.css';
import '../../css/y/yut4brtiz.css';
import '../../css/i/iswbwirhc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2mjsubix"/><path class="yut4brtiz"/><path class="iswbwirhc"/>`,
		"fallback": "energy-icons:hazard-toxic-48-bold",
	});
}

export default Component;
