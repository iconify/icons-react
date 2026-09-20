import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbt3_ecay.css';
import '../../css/a/awy61ibgu.css';
import '../../css/y/yln89_oby.css';

const viewBox = {"width":300,"height":331.399};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mbt3_ecay"/><path clip-rule="evenodd" class="awy61ibgu"/><path clip-rule="evenodd" class="yln89_oby"/>`,
		"fallback": "thesvg-color:eps",
	});
}

export default Component;
