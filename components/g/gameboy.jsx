import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aie-pdbvq.css';
import '../../css/v/vfm02vioa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aie-pdbvq"/><path class="vfm02vioa"/></g>`,
		"fallback": "mage:gameboy",
	});
}

export default Component;
