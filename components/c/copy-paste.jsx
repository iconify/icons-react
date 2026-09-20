import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l60b54rwp.css';
import '../../css/f/frmm0gs6t.css';
import '../../css/s/svihw5bmr.css';
import '../../css/o/oei2idbhx.css';
import '../../css/n/n3utz4b1m.css';
import '../../css/d/dema0-tmx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l60b54rwp"/><path class="frmm0gs6t"/><path class="svihw5bmr"/><path class="oei2idbhx"/><path class="n3utz4b1m"/><path class="dema0-tmx"/></g>`,
		"fallback": "streamline-color:copy-paste",
	});
}

export default Component;
