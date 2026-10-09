import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ect0zrm_l.css';
import '../../css/e/eing7xb8o.css';
import '../../css/b/b9-4p0nzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ect0zrm_l"/><path class="eing7xb8o"/><path class="b9-4p0nzw"/>`,
		"fallback": "energy-icons:connector-ccs-48",
	});
}

export default Component;
