import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok2n2nbsl.css';
import '../../css/q/q9_k86bve.css';
import '../../css/g/gfthn_qja.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok2n2nbsl"/><path class="q9_k86bve"/><path class="gfthn_qja"/>`,
		"fallback": "energy-icons:filter-x-20",
	});
}

export default Component;
