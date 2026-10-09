import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6uey3bcg.css';
import '../../css/e/ez71_mloi.css';
import '../../css/s/sauhagb7x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6uey3bcg"/><path class="ez71_mloi"/><path class="sauhagb7x"/>`,
		"fallback": "energy-icons:hydraulic-press-48-bold",
	});
}

export default Component;
