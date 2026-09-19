import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3igw5fho.css';
import '../../css/b/bokkfrbsq.css';
import '../../css/p/pmyrwrkih.css';
import '../../css/d/dtbff-bfx.css';
import '../../css/x/xkjkjcb2c.css';
import '../../css/f/fbmc41bjt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k3igw5fho"/><path class="bokkfrbsq"/><path class="pmyrwrkih"/><path class="dtbff-bfx"/><path class="xkjkjcb2c"/><path class="fbmc41bjt"/></g>`,
		"fallback": "fluent-emoji-flat:bison",
	});
}

export default Component;
