import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvferlvhi.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvferlvhi"/>`,
		"fallback": "memory:alpha-i",
	});
}

export default Component;
