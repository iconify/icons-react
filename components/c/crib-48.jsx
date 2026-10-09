import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k800nzeoy.css';
import '../../css/e/eawggbbqu.css';
import '../../css/z/z7c6bib6i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k800nzeoy"/><path class="eawggbbqu"/><path class="z7c6bib6i"/>`,
		"fallback": "energy-icons:crib-48",
	});
}

export default Component;
