import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/l19gb-b2o.css';
import '../../css/u/udktnefhk.css';
import '../../css/m/mew8rkbaq.css';
import '../../css/o/okle5cb-l.css';
import '../../css/v/v_uvoc_bw.css';
import '../../css/b/bq-zlubjd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="l19gb-b2o"/><path class="udktnefhk"/><path class="mew8rkbaq"/><circle class="okle5cb-l"/><circle class="v_uvoc_bw"/><circle class="bq-zlubjd"/></g>`,
		"fallback": "icon-park:anchor-round",
	});
}

export default Component;
