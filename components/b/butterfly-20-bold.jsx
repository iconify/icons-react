import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq_5uhbqs.css';
import '../../css/t/th4eb16qw.css';
import '../../css/k/kktadezya.css';
import '../../css/z/zu96o6vqs.css';
import '../../css/e/exd3h-57c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq_5uhbqs"/><path class="th4eb16qw"/><path class="kktadezya"/><path class="zu96o6vqs"/><path class="exd3h-57c"/>`,
		"fallback": "energy-icons:butterfly-20-bold",
	});
}

export default Component;
