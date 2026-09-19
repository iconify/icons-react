import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvv2sxohs.css';
import '../../css/t/txt750bes.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvv2sxohs"/><path class="txt750bes"/>`,
		"fallback": "devicon:appwrite-wordmark",
	});
}

export default Component;
