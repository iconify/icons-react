import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s338b9bpw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s338b9bpw"/>`,
		"fallback": "teenyicons:barcode-outline",
	});
}

export default Component;
