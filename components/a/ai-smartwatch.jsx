import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kwm-i6kdf.css';
import '../../css/z/zzw-d1k2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kwm-i6kdf"/><path class="zzw-d1k2j"/></g>`,
		"fallback": "hugeicons:ai-smartwatch",
	});
}

export default Component;
