import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpaej3bcw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpaej3bcw"/>`,
		"fallback": "fa7-regular:frown-open",
	});
}

export default Component;
