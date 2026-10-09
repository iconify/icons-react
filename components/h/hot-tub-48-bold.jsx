import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lelyizmit.css';
import '../../css/s/spkgakbtd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lelyizmit"/><path class="spkgakbtd"/>`,
		"fallback": "energy-icons:hot-tub-48-bold",
	});
}

export default Component;
