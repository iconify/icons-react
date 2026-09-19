import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uk1uhtb2n.css';
import '../../css/u/uf6sm2mwe.css';
import '../../css/w/wsazxob3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uk1uhtb2n"/><path class="uf6sm2mwe"/><path class="wsazxob3a"/></g>`,
		"fallback": "hugeicons:image-remove-01",
	});
}

export default Component;
