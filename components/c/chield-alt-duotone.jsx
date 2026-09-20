import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjg6pjb6n.css';
import '../../css/x/xel-33c3d.css';
import '../../css/y/y6-cd8pdo.css';
import '../../css/w/weyl7jbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjg6pjb6n"/><circle class="xel-33c3d"/><circle class="y6-cd8pdo"/><circle class="weyl7jbms"/>`,
		"fallback": "lets-icons:chield-alt-duotone",
	});
}

export default Component;
