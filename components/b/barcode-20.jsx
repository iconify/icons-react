import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuxhki93l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuxhki93l"/>`,
		"fallback": "energy-icons:barcode-20",
	});
}

export default Component;
