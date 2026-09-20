import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gxns9jtwr.css';
import '../../css/u/ufjoo7b7a.css';
import '../../css/y/yp0apkmdu.css';
import '../../css/d/dxdb0jbkv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gxns9jtwr"/><path clip-rule="evenodd" class="ufjoo7b7a"/><path class="yp0apkmdu"/><path clip-rule="evenodd" class="dxdb0jbkv"/></g>`,
		"fallback": "streamline-color:film-slate-flat",
	});
}

export default Component;
