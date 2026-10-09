import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9wv786kf.css';
import '../../css/j/jr0li4tsj.css';
import '../../css/x/x9t4ydb-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9wv786kf"/><path class="jr0li4tsj"/><path class="x9t4ydb-d"/>`,
		"fallback": "energy-icons:blueprint-48",
	});
}

export default Component;
