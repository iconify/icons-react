import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqjbftbwq.css';
import '../../css/q/qi4gmjz3h.css';
import '../../css/h/hjy7c8brq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqjbftbwq"/><path class="qi4gmjz3h"/><path class="hjy7c8brq"/>`,
		"fallback": "energy-icons:hotel-48",
	});
}

export default Component;
