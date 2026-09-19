import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bfxf_z8fm.css';
import '../../css/q/qtopk50fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bfxf_z8fm"/><path class="qtopk50fp"/></g>`,
		"fallback": "iconoir:divide-three",
	});
}

export default Component;
