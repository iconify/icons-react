import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/al5alkbka.css';
import '../../css/f/foupstbzj.css';
import '../../css/i/imdqyj8td.css';
import '../../css/j/jnde98bia.css';
import '../../css/v/vzcrqqevj.css';
import '../../css/v/vd5uu0bon.css';
import '../../css/l/l8pu2sbyf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="al5alkbka"/><path class="foupstbzj"/><path clip-rule="evenodd" class="imdqyj8td"/><path class="jnde98bia"/><path clip-rule="evenodd" class="vzcrqqevj"/><path clip-rule="evenodd" class="vd5uu0bon"/><path class="l8pu2sbyf"/></g>`,
		"fallback": "fluent-emoji-flat:folded-hands-medium-dark",
	});
}

export default Component;
