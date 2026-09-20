import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh74e8blv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh74e8blv"/>`,
		"fallback": "uiw:github-o",
	});
}

export default Component;
