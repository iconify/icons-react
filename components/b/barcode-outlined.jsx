import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax3vvj-ye.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax3vvj-ye"/>`,
		"fallback": "ant-design:barcode-outlined",
	});
}

export default Component;
