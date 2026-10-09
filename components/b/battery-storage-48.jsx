import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur5zgrerl.css';
import '../../css/v/vj1jlxbvg.css';
import '../../css/u/u_j7ojbzb.css';
import '../../css/m/m12zqk44s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur5zgrerl"/><path class="vj1jlxbvg"/><path class="u_j7ojbzb"/><path class="m12zqk44s"/>`,
		"fallback": "energy-icons:battery-storage-48",
	});
}

export default Component;
