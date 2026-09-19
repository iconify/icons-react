import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf6nftywu.css';

const viewBox = {"width":1760,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf6nftywu"/>`,
		"fallback": "fa:google-wallet",
	});
}

export default Component;
