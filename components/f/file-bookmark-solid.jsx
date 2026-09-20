import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny3teufhg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ny3teufhg"/>`,
		"fallback": "streamline-flex:file-bookmark-solid",
	});
}

export default Component;
