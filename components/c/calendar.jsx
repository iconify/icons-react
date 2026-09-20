import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xien6yinx.css';
import '../../css/m/m_c3kddya.css';
import '../../css/h/h76cwhb5f.css';
import '../../css/h/h83t-1b-k.css';
import '../../css/z/zliavac6e.css';
import '../../css/y/yo5gisxdh.css';
import '../../css/p/p1856z-6o.css';
import '../../css/r/r2hku-bpu.css';
import '../../css/h/hrmqobcfg.css';
import '../../css/s/sa7l66jag.css';
import '../../css/e/etmehrbzo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xien6yinx"/><path class="m_c3kddya"/><path class="h76cwhb5f"/><path class="h83t-1b-k"/><path class="zliavac6e"/><path class="yo5gisxdh"/><path class="p1856z-6o"/><path class="r2hku-bpu"/><path class="hrmqobcfg"/><path class="sa7l66jag"/><path class="etmehrbzo"/>`,
		"fallback": "streamline-emojis:calendar",
	});
}

export default Component;
