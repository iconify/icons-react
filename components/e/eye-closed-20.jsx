import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1j29iy8v.css';
import '../../css/g/gljfs3bti.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1j29iy8v"/><path class="gljfs3bti"/>`,
		"fallback": "energy-icons:eye-closed-20",
	});
}

export default Component;
