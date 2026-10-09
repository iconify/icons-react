import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuoptpb4g.css';
import '../../css/g/gyc_99q-h.css';
import '../../css/e/eqj-1vbam.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuoptpb4g"/><path class="gyc_99q-h"/><path class="eqj-1vbam"/>`,
		"fallback": "energy-icons:database-48",
	});
}

export default Component;
