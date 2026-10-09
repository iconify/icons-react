import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lct1fn02i.css';
import '../../css/h/h_ct2hn4p.css';
import '../../css/j/jdhs7_bdy.css';
import '../../css/w/wwfzbmz9y.css';
import '../../css/j/jtx38t8rb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lct1fn02i"/><path class="h_ct2hn4p"/><path class="jdhs7_bdy"/><path class="wwfzbmz9y"/><path class="jtx38t8rb"/>`,
		"fallback": "energy-icons:grid-connection-20",
	});
}

export default Component;
