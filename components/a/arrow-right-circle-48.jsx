import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/m/m3eum-q9t.css';
import '../../css/j/j8ma1-55j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="m3eum-q9t"/><path class="j8ma1-55j"/>`,
		"fallback": "energy-icons:arrow-right-circle-48",
	});
}

export default Component;
