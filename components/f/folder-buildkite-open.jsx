import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pffnfbbjn.css';
import '../../css/m/mcl56li3l.css';
import '../../css/n/nadh9-zvh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pffnfbbjn"/><path class="mcl56li3l"/><path class="nadh9-zvh"/>`,
		"fallback": "material-icon-theme:folder-buildkite-open",
	});
}

export default Component;
