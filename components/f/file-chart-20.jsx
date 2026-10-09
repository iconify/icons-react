import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-g74icta.css';
import '../../css/i/i2gsdgbyq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-g74icta"/><path class="i2gsdgbyq"/>`,
		"fallback": "energy-icons:file-chart-20",
	});
}

export default Component;
