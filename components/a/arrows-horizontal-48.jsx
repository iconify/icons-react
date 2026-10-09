import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmb21zcef.css';
import '../../css/a/aw0qt-2do.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmb21zcef"/><path class="aw0qt-2do"/>`,
		"fallback": "energy-icons:arrows-horizontal-48",
	});
}

export default Component;
