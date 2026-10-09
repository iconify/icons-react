import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fspafybgd.css';
import '../../css/f/fw66xi3qj.css';
import '../../css/a/ayok7_nhc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fspafybgd"/><path class="fw66xi3qj"/><path class="ayok7_nhc"/>`,
		"fallback": "energy-icons:houseboat-20-bold",
	});
}

export default Component;
