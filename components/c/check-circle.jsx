import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smbnb7bef.css';
import '../../css/p/pln5qlbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smbnb7bef"/><path class="pln5qlbcz"/>`,
		"fallback": "pixel:check-circle",
	});
}

export default Component;
