import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzofhbcwo.css';
import '../../css/o/ow7bebbcy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzofhbcwo"/><path class="ow7bebbcy"/>`,
		"fallback": "fxemoji:europeafricaglobe",
	});
}

export default Component;
