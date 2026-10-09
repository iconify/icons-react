import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb7o8wq_f.css';
import '../../css/v/vh4ifyb5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb7o8wq_f"/><path class="vh4ifyb5r"/>`,
		"fallback": "energy-icons:contract-48-bold",
	});
}

export default Component;
