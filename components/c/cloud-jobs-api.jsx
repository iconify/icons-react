import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du8w8acry.css';
import '../../css/u/u36hig5cl.css';
import '../../css/q/qgf49f1ih.css';
import '../../css/d/dl4fjbb9m.css';
import '../../css/z/z36x42tph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du8w8acry"/><path class="u36hig5cl"/><path class="qgf49f1ih"/><path class="dl4fjbb9m"/><path class="z36x42tph"/>`,
		"fallback": "gcp:cloud-jobs-api",
	});
}

export default Component;
