import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6gt3ebew.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6gt3ebew"/>`,
		"fallback": "fa7-solid:hotel",
	});
}

export default Component;
