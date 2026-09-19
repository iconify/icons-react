import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i2bj1m5uc.css';
import '../../css/m/mhem-3zvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i2bj1m5uc"/><path class="mhem-3zvu"/></g>`,
		"fallback": "hugeicons:computer-terminal-02",
	});
}

export default Component;
