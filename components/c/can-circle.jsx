import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j2qmstbqm.css';
import '../../css/f/fabrggbzi.css';
import '../../css/h/h0vor2f9a.css';
import '../../css/x/x7o6l7jax.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j2qmstbqm"/><path clip-rule="evenodd" class="fabrggbzi"/><path class="h0vor2f9a"/><path class="x7o6l7jax"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:can-circle",
	});
}

export default Component;
