import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xkgpt9wlu.css';
import '../../css/y/yxrqwlxud.css';
import '../../css/n/nokwl_mnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path clip-rule="evenodd" class="xkgpt9wlu"/><path clip-rule="evenodd" class="yxrqwlxud"/><path class="nokwl_mnd"/></g>`,
		"fallback": "streamline-logos:google-microphone-voice-search-logo",
	});
}

export default Component;
