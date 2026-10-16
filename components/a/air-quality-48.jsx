import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbi-s8b7c.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbi-s8b7c"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:air-quality-48",
	});
}

export default Component;
