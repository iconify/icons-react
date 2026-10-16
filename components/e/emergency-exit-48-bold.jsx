import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9e0p_b-j.css';
import '../../css/b/b34wfpb4d.css';
import '../../css/e/eg_6x1bmw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9e0p_b-j"/><path class="b34wfpb4d"/><path class="eg_6x1bmw"/>`,
		"fallback": "energy-icons:emergency-exit-48-bold",
	});
}

export default Component;
