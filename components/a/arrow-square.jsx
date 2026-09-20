import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ggkeetu4f.css';
import '../../css/i/i9ianue2x.css';
import '../../css/s/srwkijb9x.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ggkeetu4f"/><path class="i9ianue2x"/><path class="srwkijb9x"/><path class="rvymobzlx"/></g>`,
		"fallback": "reicon:arrow-square",
	});
}

export default Component;
