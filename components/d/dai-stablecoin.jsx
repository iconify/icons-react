import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/non6l0bmz.css';
import '../../css/x/xo30ct2yo.css';

const viewBox = {"width":444.44,"height":444.44};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="non6l0bmz"/><path class="xo30ct2yo"/>`,
		"fallback": "thesvg-color:dai-stablecoin",
	});
}

export default Component;
