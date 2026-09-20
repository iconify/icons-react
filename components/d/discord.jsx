import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zpg5x16lp.css';
import '../../css/h/hbak2v8ug.css';
import '../../css/c/cwo89ng1f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="zpg5x16lp"/><path class="hbak2v8ug"/><path class="cwo89ng1f"/></g>`,
		"fallback": "streamline:discord",
	});
}

export default Component;
