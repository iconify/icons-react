import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euuo8mlxo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euuo8mlxo"/>`,
		"fallback": "selfhst:fileflows-dark",
	});
}

export default Component;
