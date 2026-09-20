import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-hvtj13o.css';
import '../../css/n/nfzvdkovf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-hvtj13o"/><path class="nfzvdkovf"/>`,
		"fallback": "teenyicons:folders-solid",
	});
}

export default Component;
