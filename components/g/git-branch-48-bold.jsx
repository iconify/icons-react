import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1o-fsx4d.css';
import '../../css/p/pf54fdcpd.css';
import '../../css/o/otww_sbex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1o-fsx4d"/><path class="pf54fdcpd"/><path class="otww_sbex"/>`,
		"fallback": "energy-icons:git-branch-48-bold",
	});
}

export default Component;
