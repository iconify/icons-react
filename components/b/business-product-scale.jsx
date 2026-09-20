import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r59434b-s.css';
import '../../css/l/llsk85l6z.css';
import '../../css/m/mtah3b3np.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r59434b-s"/><path class="llsk85l6z"/><path class="mtah3b3np"/>`,
		"fallback": "streamline-pixel:business-product-scale",
	});
}

export default Component;
