import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vhu2almdx.css';
import '../../css/t/tpek4zp-m.css';
import '../../css/s/siyi_abkh.css';
import '../../css/b/bosiir7zi.css';
import '../../css/v/v7tmoibra.css';
import '../../css/e/ej65a4b8r.css';
import '../../css/x/x3wjx54tk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vhu2almdx"/><path class="tpek4zp-m"/><path class="siyi_abkh"/><path class="bosiir7zi"/><path class="v7tmoibra"/><path class="ej65a4b8r"/><path class="x3wjx54tk"/></g>`,
		"fallback": "glyphs-poly:compass-1",
	});
}

export default Component;
