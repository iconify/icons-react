import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmwnk3p6s.css';
import '../../css/u/uar01lb2v.css';
import '../../css/p/p2sew--qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cmwnk3p6s"/><path clip-rule="evenodd" class="uar01lb2v"/><path class="p2sew--qs"/>`,
		"fallback": "thesvg-color:commanda-cohere",
	});
}

export default Component;
