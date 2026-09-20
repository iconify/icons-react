import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/j/j2qmstbqm.css';
import '../../css/f/fabrggbzi.css';
import '../../css/h/h0vor2f9a.css';
import '../../css/x/x7o6l7jax.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG6GkL7NhP"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="j2qmstbqm"/><path clip-rule="evenodd" class="fabrggbzi"/><path class="h0vor2f9a"/><path class="x7o6l7jax"/></g></mask></defs><circle mask="url(#SVG6GkL7NhP)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:can-circle-filled",
	});
}

export default Component;
