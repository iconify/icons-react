import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oovvmabkz.css';
import '../../css/p/plqdzxpyi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oovvmabkz"/><path class="plqdzxpyi"/>`,
		"fallback": "energy-icons:data-pipeline-48",
	});
}

export default Component;
