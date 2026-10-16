import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok1m3edsi.css';
import '../../css/b/b7_h5qb_d.css';
import '../../css/e/ehlm3jw4n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok1m3edsi"/><path class="b7_h5qb_d"/><path class="ehlm3jw4n"/>`,
		"fallback": "energy-icons:compost-48",
	});
}

export default Component;
