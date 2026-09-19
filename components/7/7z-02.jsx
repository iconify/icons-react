import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wvgut8b1f.css';
import '../../css/e/el_s_pbhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wvgut8b1f"/><path class="el_s_pbhr"/></g>`,
		"fallback": "hugeicons:7z-02",
	});
}

export default Component;
