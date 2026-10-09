import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx5vtushp.css';
import '../../css/w/wzis-qf2x.css';
import '../../css/p/p8876xbpi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx5vtushp"/><path class="wzis-qf2x"/><path class="p8876xbpi"/>`,
		"fallback": "energy-icons:carbon-offset-48",
	});
}

export default Component;
