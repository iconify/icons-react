import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/r/rehh5j-gt.css';
import '../../css/v/v9df5cbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="rehh5j-gt"/><path class="v9df5cbny"/>`,
		"fallback": "solar:creative-commons-bold-duotone",
	});
}

export default Component;
