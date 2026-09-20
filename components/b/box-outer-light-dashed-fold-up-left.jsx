import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6r2qubzq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6r2qubzq"/>`,
		"fallback": "memory:box-outer-light-dashed-fold-up-left",
	});
}

export default Component;
