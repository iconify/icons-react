import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/w/wug07fzrq.css';
import '../../css/s/s_ifysnof.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="wug07fzrq"/><path class="s_ifysnof"/>`,
		"fallback": "energy-icons:basketball-48-bold",
	});
}

export default Component;
