import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdkmvbb9q.css';
import '../../css/h/hk1pnd3sk.css';
import '../../css/u/uvsf3cc9p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdkmvbb9q"/><path class="hk1pnd3sk"/><path class="uvsf3cc9p"/>`,
		"fallback": "energy-icons:gas-valve-48-bold",
	});
}

export default Component;
