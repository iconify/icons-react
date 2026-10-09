import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0d-k9bod.css';
import '../../css/i/iuszqrjvz.css';
import '../../css/g/g3z_62mfz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0d-k9bod"/><path class="iuszqrjvz"/><path class="g3z_62mfz"/>`,
		"fallback": "energy-icons:house-check-20",
	});
}

export default Component;
