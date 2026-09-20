import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kjbys1byo.css';
import '../../css/m/mta9hp0sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kjbys1byo"/><path class="mta9hp0sf"/></g>`,
		"fallback": "streamline-ultimate:flag",
	});
}

export default Component;
