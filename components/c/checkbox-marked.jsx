import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyaeqib9f.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyaeqib9f"/>`,
		"fallback": "memory:checkbox-marked",
	});
}

export default Component;
