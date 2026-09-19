import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b22ju_bpv.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b22ju_bpv"/>`,
		"fallback": "fa:delicious",
	});
}

export default Component;
