import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcj6n3sgd.css';
import '../../css/f/f2--itp1s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcj6n3sgd"/><path class="f2--itp1s"/>`,
		"fallback": "energy-icons:battery-pack-48-bold",
	});
}

export default Component;
