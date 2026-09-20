import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkiqt7bnd.css';
import '../../css/k/k06qbne_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkiqt7bnd"/><path class="k06qbne_f"/>`,
		"fallback": "mingcute:dashboard-2-fill",
	});
}

export default Component;
