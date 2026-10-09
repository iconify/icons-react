import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4ersub-k.css';
import '../../css/b/bpoutcsqa.css';
import '../../css/v/v_i9e3d-i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4ersub-k"/><path class="bpoutcsqa"/><path class="v_i9e3d-i"/>`,
		"fallback": "energy-icons:git-pull-request-48",
	});
}

export default Component;
