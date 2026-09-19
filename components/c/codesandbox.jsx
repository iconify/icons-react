import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kique1x5f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kique1x5f"/>`,
		"fallback": "cib:codesandbox",
	});
}

export default Component;
