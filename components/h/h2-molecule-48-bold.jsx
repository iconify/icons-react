import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv0gyqj3i.css';
import '../../css/m/mkxyiywxp.css';
import '../../css/t/tar_r4_5t.css';
import '../../css/u/u6iq9opqd.css';
import '../../css/q/q2dr6dr3a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv0gyqj3i"/><path class="mkxyiywxp"/><path class="tar_r4_5t"/><path class="u6iq9opqd"/><path class="q2dr6dr3a"/>`,
		"fallback": "energy-icons:h2-molecule-48-bold",
	});
}

export default Component;
