import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xy2e0nbar.css';
import '../../css/e/e9xwutbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xy2e0nbar"/><path class="e9xwutbft"/></g>`,
		"fallback": "hugeicons:ai-voice-01",
	});
}

export default Component;
