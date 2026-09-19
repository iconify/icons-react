import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vmntu4b1x.css';
import '../../css/e/e9xwutbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vmntu4b1x"/><path class="e9xwutbft"/></g>`,
		"fallback": "hugeicons:ai-voice-01",
	});
}

export default Component;
