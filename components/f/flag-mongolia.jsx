import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnr7_pc2c.css';
import '../../css/y/yonf7by6s.css';
import '../../css/v/vm46r9bsk.css';
import '../../css/z/zucc7kqxu.css';
import '../../css/y/y5fhatbfs.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnr7_pc2c"/><path class="yonf7by6s"/><circle class="vm46r9bsk"/><circle class="zucc7kqxu"/><path class="y5fhatbfs"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-mongolia",
	});
}

export default Component;
