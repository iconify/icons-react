import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q8z4yib3m.css';
import '../../css/z/zgp1fe1ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q8z4yib3m"/><path class="zgp1fe1ve"/></g>`,
		"fallback": "streamline-ultimate:file-code-edit-1",
	});
}

export default Component;
