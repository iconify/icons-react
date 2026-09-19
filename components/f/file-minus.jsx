import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdt93xb2p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xdt93xb2p"/>`,
		"fallback": "gravity-ui:file-minus",
	});
}

export default Component;
