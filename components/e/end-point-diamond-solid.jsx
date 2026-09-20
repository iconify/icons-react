import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uejcfd1cs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uejcfd1cs"/>`,
		"fallback": "streamline-plump:end-point-diamond-solid",
	});
}

export default Component;
