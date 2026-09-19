import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/crvfg_zef.css';
import '../../css/a/a30gdttzf.css';
import '../../css/b/bo93y_ztc.css';
import '../../css/s/s26qisbtl.css';
import '../../css/s/scaplnjbf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="crvfg_zef"/><path class="a30gdttzf"/><path clip-rule="evenodd" class="bo93y_ztc"/><path clip-rule="evenodd" class="s26qisbtl"/><path clip-rule="evenodd" class="scaplnjbf"/></g>`,
		"fallback": "healthicons:hand-wipe-paper",
	});
}

export default Component;
