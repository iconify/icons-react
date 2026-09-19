import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-8l8abkc.css';
import '../../css/y/yts213bsu.css';
import '../../css/m/majk71b5n.css';
import '../../css/o/ow5iplbrt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-8l8abkc"/><path class="yts213bsu"/><path class="majk71b5n"/><path class="ow5iplbrt"/>`,
		"fallback": "ant-design:dashboard-twotone",
	});
}

export default Component;
