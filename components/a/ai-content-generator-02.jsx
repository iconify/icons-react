import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/idfcu2b1l.css';
import '../../css/z/z0f77_p2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="idfcu2b1l"/><path class="z0f77_p2c"/></g>`,
		"fallback": "hugeicons:ai-content-generator-02",
	});
}

export default Component;
