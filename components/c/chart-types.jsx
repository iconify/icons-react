import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u76w8abec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u76w8abec"/>`,
		"fallback": "ix:chart-types",
	});
}

export default Component;
