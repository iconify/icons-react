import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-1_twbuv.css';
import '../../css/u/un8javbzg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-1_twbuv"/><path class="un8javbzg"/>`,
		"fallback": "energy-icons:fish-48-bold",
	});
}

export default Component;
