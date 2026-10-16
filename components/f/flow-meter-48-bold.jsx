import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_6rrccmc.css';
import '../../css/u/ufby2lc1j.css';
import '../../css/x/x-xho5uub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_6rrccmc"/><path class="ufby2lc1j"/><path class="x-xho5uub"/>`,
		"fallback": "energy-icons:flow-meter-48-bold",
	});
}

export default Component;
