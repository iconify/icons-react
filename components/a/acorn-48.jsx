import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvn4mfbec.css';
import '../../css/l/lahmkil_a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvn4mfbec"/><path class="lahmkil_a"/>`,
		"fallback": "energy-icons:acorn-48",
	});
}

export default Component;
