import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5zuxw69w.css';
import '../../css/t/t6-kl0b-c.css';
import '../../css/s/sw6q46v3r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c5zuxw69w"/><path class="t6-kl0b-c"/><path class="sw6q46v3r"/></g>`,
		"fallback": "fluent-emoji-flat:hand-with-index-finger-and-thumb-crossed-dark",
	});
}

export default Component;
