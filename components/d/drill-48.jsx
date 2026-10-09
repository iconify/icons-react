import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrd0nmjhn.css';
import '../../css/y/yxqo9ym2g.css';
import '../../css/u/u7ur8ubvi.css';
import '../../css/b/b_yf7jb9p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrd0nmjhn"/><path class="yxqo9ym2g"/><path class="u7ur8ubvi"/><path class="b_yf7jb9p"/>`,
		"fallback": "energy-icons:drill-48",
	});
}

export default Component;
