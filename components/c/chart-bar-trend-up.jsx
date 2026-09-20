import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qg8owzi5f.css';
import '../../css/s/sjqyd1bri.css';
import '../../css/z/z6_008b8j.css';
import '../../css/v/vskemkbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="qg8owzi5f"/><rect class="sjqyd1bri"/><rect class="z6_008b8j"/><path class="vskemkbqj"/></g>`,
		"fallback": "reicon:chart-bar-trend-up",
	});
}

export default Component;
