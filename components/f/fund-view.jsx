import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5nzkvbsa.css';
import '../../css/b/bhztshb0g.css';
import '../../css/n/n1mj_5hgu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5nzkvbsa"/><path class="bhztshb0g"/><path class="n1mj_5hgu"/>`,
		"fallback": "ant-design:fund-view",
	});
}

export default Component;
