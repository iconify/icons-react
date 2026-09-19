import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knaeq35ob.css';
import '../../css/p/p9-axprhp.css';
import '../../css/y/ynji0ebgt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knaeq35ob"/><path class="p9-axprhp"/><path class="ynji0ebgt"/>`,
		"fallback": "ant-design:credit-card-twotone",
	});
}

export default Component;
