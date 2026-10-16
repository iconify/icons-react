import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inog0fb6a.css';
import '../../css/a/axk7hmbie.css';
import '../../css/l/l7unjebct.css';
import '../../css/y/y_rvfmb9n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inog0fb6a"/><path class="axk7hmbie"/><path class="l7unjebct"/><path class="y_rvfmb9n"/>`,
		"fallback": "energy-icons:fuel-oil-tank-20",
	});
}

export default Component;
