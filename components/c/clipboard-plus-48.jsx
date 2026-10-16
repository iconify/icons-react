import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx59guuve.css';
import '../../css/h/hapdmvwru.css';
import '../../css/k/k9m4xcmyy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx59guuve"/><path class="hapdmvwru"/><path class="k9m4xcmyy"/>`,
		"fallback": "energy-icons:clipboard-plus-48",
	});
}

export default Component;
