import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i_64shb3t.css';
import '../../css/c/crd3eebtk.css';
import '../../css/m/mnj2i1bgl.css';
import '../../css/v/v6ah-0brl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i_64shb3t"/><path class="crd3eebtk"/><ellipse class="mnj2i1bgl"/><path class="v6ah-0brl"/></g>`,
		"fallback": "hugeicons:angel",
	});
}

export default Component;
