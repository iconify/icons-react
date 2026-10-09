import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhvqtnbfx.css';
import '../../css/u/un5h_vbqq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhvqtnbfx"/><path class="un5h_vbqq"/>`,
		"fallback": "energy-icons:anemometer-48-bold",
	});
}

export default Component;
