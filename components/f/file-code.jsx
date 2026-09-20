import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/seebzcbnk.css';
import '../../css/m/m1h2u4b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="seebzcbnk"/><path class="m1h2u4b-o"/></g>`,
		"fallback": "streamline-ultimate:file-code",
	});
}

export default Component;
