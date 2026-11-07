import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3lwmsbeo.css';
import '../../css/w/w17zy0bco.css';
import '../../css/d/dan73zqnv.css';
import '../../css/s/shroyfbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3lwmsbeo"/><path clip-rule="evenodd" class="w17zy0bco"/><path class="dan73zqnv"/><path class="shroyfbxo"/>`,
		"fallback": "solar:columns-3-cog-bold",
	});
}

export default Component;
