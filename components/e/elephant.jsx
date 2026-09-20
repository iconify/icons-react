import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/of6gbftai.css';
import '../../css/j/j11l97rrr.css';
import '../../css/d/dd5twob4r.css';
import '../../css/p/pmml4bcwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="of6gbftai"/><path class="j11l97rrr"/><path class="dd5twob4r"/><path class="pmml4bcwh"/></g>`,
		"fallback": "streamline-cyber-color:elephant",
	});
}

export default Component;
