import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kgo6dpbjf.css';
import '../../css/s/sx6hnebpa.css';
import '../../css/k/krh2erb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kgo6dpbjf"/><path class="sx6hnebpa"/><path class="krh2erb9t"/></g>`,
		"fallback": "hugeicons:image-play",
	});
}

export default Component;
