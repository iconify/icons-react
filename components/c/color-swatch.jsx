import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z7o1plwou.css';
import '../../css/s/shv_7pb8m.css';
import '../../css/i/ih1z0vbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z7o1plwou"/><path class="shv_7pb8m"/><path class="ih1z0vbka"/></g>`,
		"fallback": "reicon:color-swatch",
	});
}

export default Component;
