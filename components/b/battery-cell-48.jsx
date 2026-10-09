import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d88tubblx.css';
import '../../css/a/a3i1g1emt.css';
import '../../css/q/qayriggpe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d88tubblx"/><path class="a3i1g1emt"/><path class="qayriggpe"/>`,
		"fallback": "energy-icons:battery-cell-48",
	});
}

export default Component;
