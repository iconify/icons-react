import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqasqsbwy.css';
import '../../css/o/o2hcozbvp.css';
import '../../css/k/k3_a_wb4n.css';
import '../../css/q/q07vckb0v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqasqsbwy"/><path clip-rule="evenodd" class="o2hcozbvp"/><path class="k3_a_wb4n"/><path class="q07vckb0v"/></g>`,
		"fallback": "streamline-color:bow-tie",
	});
}

export default Component;
