import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/djvbbrihb.css';
import '../../css/c/cdn_c2b2i.css';
import '../../css/y/y58k7bb-w.css';
import '../../css/a/ajturew0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="djvbbrihb"/><path class="cdn_c2b2i"/><circle class="y58k7bb-w"/><path class="ajturew0a"/></g>`,
		"fallback": "hugeicons:handcuffs",
	});
}

export default Component;
