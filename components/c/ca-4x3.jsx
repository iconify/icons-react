import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqz-ogqhl.css';
import '../../css/a/a2nfcgrow.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqz-ogqhl"/><path class="a2nfcgrow"/>`,
		"fallback": "flag:ca-4x3",
	});
}

export default Component;
