import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/e/e6boln91d.css';
import '../../css/o/o361r-6gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="e6boln91d"/><path clip-rule="evenodd" class="o361r-6gv"/>`,
		"fallback": "solar:high-quality-bold-duotone",
	});
}

export default Component;
