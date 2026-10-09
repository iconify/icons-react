import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg8ope4jq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg8ope4jq"/>`,
		"fallback": "energy-icons:hex-key-48-bold",
	});
}

export default Component;
