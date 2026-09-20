import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/i/i8ddg_beo.css';
import '../../css/d/dxznuzbiv.css';
import '../../css/y/yksgaftlg.css';
import '../../css/m/mwsmyybbj.css';
import '../../css/g/gu84rhbhv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="i8ddg_beo"/><path clip-rule="evenodd" class="dxznuzbiv"/></g><path clip-rule="evenodd" class="yksgaftlg"/><path clip-rule="evenodd" class="mwsmyybbj"/><path clip-rule="evenodd" class="gu84rhbhv"/></g>`,
		"fallback": "pepicons-print:eye-frame",
	});
}

export default Component;
