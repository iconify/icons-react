import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/o/o30l2nb_d.css';
import '../../css/g/gda4x1kcc.css';
import '../../css/q/qs03ycwcu.css';
import '../../css/h/hzxnxfb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="o30l2nb_d"/><path class="gda4x1kcc"/><path class="qs03ycwcu"/><path class="hzxnxfb9i"/></g>`,
		"fallback": "streamline-cyber:business-startup-mobile",
	});
}

export default Component;
