import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b89uwe67v.css';
import '../../css/r/rdyolcbjo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b89uwe67v"/><path class="rdyolcbjo"/>`,
		"fallback": "ant-design:alert-twotone",
	});
}

export default Component;
