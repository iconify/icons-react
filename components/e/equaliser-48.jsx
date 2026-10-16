import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq4_s5b3g.css';
import '../../css/b/b8lsrqc8v.css';
import '../../css/w/wwcntjf3o.css';
import '../../css/s/s03_39bqx.css';
import '../../css/r/r1f4qgbbf.css';
import '../../css/b/brtjp5b6k.css';
import '../../css/s/suniijbrz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq4_s5b3g"/><path class="b8lsrqc8v"/><path class="wwcntjf3o"/><path class="s03_39bqx"/><path class="r1f4qgbbf"/><path class="brtjp5b6k"/><path class="suniijbrz"/>`,
		"fallback": "energy-icons:equaliser-48",
	});
}

export default Component;
