import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pirchl2uz.css';
import '../../css/y/yolid685o.css';
import '../../css/t/t5wzgeb_u.css';
import '../../css/c/cvej9yzdi.css';
import '../../css/v/v8_t7werj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pirchl2uz"/><path class="yolid685o"/><path class="t5wzgeb_u"/><path class="cvej9yzdi"/><path class="v8_t7werj"/></g>`,
		"fallback": "andrsrxn:ball-basketball",
	});
}

export default Component;
