import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s75wz-bud.css';
import '../../css/o/o6fe24b0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s75wz-bud"/><path class="o6fe24b0g"/>`,
		"fallback": "solar:arrow-right-from-line-bold-duotone",
	});
}

export default Component;
