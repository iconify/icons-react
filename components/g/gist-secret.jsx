import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwp8fo_vg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwp8fo_vg"/>`,
		"fallback": "codicon:gist-secret",
	});
}

export default Component;
