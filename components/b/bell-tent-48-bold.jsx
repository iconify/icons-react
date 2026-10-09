import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_2io1bvz.css';
import '../../css/t/tr-eedcjf.css';
import '../../css/o/o2ojfkh6m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_2io1bvz"/><path class="tr-eedcjf"/><path class="o2ojfkh6m"/>`,
		"fallback": "energy-icons:bell-tent-48-bold",
	});
}

export default Component;
