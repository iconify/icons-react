import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4__ecb7c.css';
import '../../css/b/by5xuwclv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4__ecb7c"/><path class="by5xuwclv"/>`,
		"fallback": "energy-icons:hydro-plant-48",
	});
}

export default Component;
