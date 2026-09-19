import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlj5cibrq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlj5cibrq"/>`,
		"fallback": "file-icons:adobe-lightroom",
	});
}

export default Component;
