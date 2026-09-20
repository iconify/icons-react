import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7laoac1b.css';
import '../../css/k/kpr370qpo.css';
import '../../css/r/rxv-kk84s.css';
import '../../css/u/u8rtwkb4d.css';
import '../../css/k/kqu_s2b8w.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7laoac1b"/><path class="kpr370qpo"/><path class="rxv-kk84s"/><path class="u8rtwkb4d"/><path class="kqu_s2b8w"/>`,
		"fallback": "iwwa:history",
	});
}

export default Component;
