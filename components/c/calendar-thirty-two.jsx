import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qeckrcnms.css';
import '../../css/d/de-808btv.css';
import '../../css/k/k24pj97po.css';
import '../../css/c/c4kvynbaq.css';
import '../../css/b/bojyjcc5o.css';
import '../../css/h/hma_ygjvn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="qeckrcnms"/><path clip-rule="evenodd" class="de-808btv"/><path class="k24pj97po"/><path class="c4kvynbaq"/><path class="bojyjcc5o"/><path class="hma_ygjvn"/></g>`,
		"fallback": "icon-park:calendar-thirty-two",
	});
}

export default Component;
