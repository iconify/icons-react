import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwml2jbca.css';
import '../../css/h/h1ouee4cg.css';
import '../../css/k/kj3-jsb-w.css';
import '../../css/s/sbe4o6bhg.css';
import '../../css/n/n8s4x7btg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwml2jbca"/><path class="h1ouee4cg"/><path class="kj3-jsb-w"/><path class="sbe4o6bhg"/><path class="n8s4x7btg"/>`,
		"fallback": "streamline-pixel:content-files-pencil-ruler",
	});
}

export default Component;
