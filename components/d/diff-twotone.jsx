import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6atusy8s.css';
import '../../css/r/ra7jfzloj.css';
import '../../css/h/hcj3z71ba.css';
import '../../css/e/etst7gbhd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6atusy8s"/><path class="ra7jfzloj"/><path class="hcj3z71ba"/><path class="etst7gbhd"/>`,
		"fallback": "ant-design:diff-twotone",
	});
}

export default Component;
