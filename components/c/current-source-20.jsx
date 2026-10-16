import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6ncrt0qq.css';
import '../../css/d/d6ggj99yx.css';
import '../../css/j/jofw17bvc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6ncrt0qq"/><path class="d6ggj99yx"/><path class="jofw17bvc"/>`,
		"fallback": "energy-icons:current-source-20",
	});
}

export default Component;
