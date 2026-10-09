import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-0gtd2mz.css';
import '../../css/m/m6ie1s5oi.css';
import '../../css/y/y6_vscbok.css';
import '../../css/b/b23aghbhl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-0gtd2mz"/><path class="m6ie1s5oi"/><path class="y6_vscbok"/><path class="b23aghbhl"/>`,
		"fallback": "energy-icons:gravity-storage-48",
	});
}

export default Component;
