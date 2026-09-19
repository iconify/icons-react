import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hpqk1yu7y.css';
import '../../css/h/hfxf2j46a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hpqk1yu7y"/><path class="hfxf2j46a"/></g>`,
		"fallback": "hugeicons:file-signal",
	});
}

export default Component;
