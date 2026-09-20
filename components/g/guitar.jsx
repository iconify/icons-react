import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/g/gj7luzv3t.css';
import '../../css/b/bv8e12z1q.css';
import '../../css/d/dv8xrgbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="gj7luzv3t"/><path class="bv8e12z1q"/><path class="dv8xrgbwr"/></g>`,
		"fallback": "streamline-cyber:guitar",
	});
}

export default Component;
