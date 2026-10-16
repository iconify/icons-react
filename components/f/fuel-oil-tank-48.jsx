import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csm3j--no.css';
import '../../css/b/bqw6zx0lk.css';
import '../../css/t/t8c3f1o7j.css';
import '../../css/f/fyarqiefq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csm3j--no"/><path class="bqw6zx0lk"/><path class="t8c3f1o7j"/><path class="fyarqiefq"/>`,
		"fallback": "energy-icons:fuel-oil-tank-48",
	});
}

export default Component;
