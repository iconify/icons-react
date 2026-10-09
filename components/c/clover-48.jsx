import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7k49nwxu.css';
import '../../css/t/tkczr6bqo.css';
import '../../css/o/o3ighkj3w.css';
import '../../css/f/fdps2pjit.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7k49nwxu"/><path class="tkczr6bqo"/><path class="o3ighkj3w"/><path class="fdps2pjit"/>`,
		"fallback": "energy-icons:clover-48",
	});
}

export default Component;
