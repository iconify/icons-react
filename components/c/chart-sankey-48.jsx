import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvtyb5b6l.css';
import '../../css/a/a_35o2j3d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvtyb5b6l"/><path class="a_35o2j3d"/>`,
		"fallback": "energy-icons:chart-sankey-48",
	});
}

export default Component;
