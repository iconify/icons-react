import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc_5blf9f.css';
import '../../css/g/gl1l9lb4d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc_5blf9f"/><path class="gl1l9lb4d"/>`,
		"fallback": "energy-icons:image-off-48",
	});
}

export default Component;
