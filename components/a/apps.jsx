import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w379rftri.css';
import '../../css/t/tjwx6vb0l.css';
import '../../css/o/o0rkvxbie.css';
import '../../css/q/qglu0sgat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="w379rftri"/><path class="tjwx6vb0l"/><rect class="o0rkvxbie"/><rect class="qglu0sgat"/></g>`,
		"fallback": "proicons:apps",
	});
}

export default Component;
