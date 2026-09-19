import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/njvarwbry.css';
import '../../css/t/tnsai-bfo.css';
import '../../css/w/wbom373wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="njvarwbry"/><path class="tnsai-bfo"/><path class="wbom373wg"/></g>`,
		"fallback": "hugeicons:bubble-chat-preview",
	});
}

export default Component;
