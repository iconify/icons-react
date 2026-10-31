import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s7vb2nxxp.css';
import '../../css/u/ujykvrsnu.css';
import '../../css/e/e5ttz1b5n.css';
import '../../css/s/sa9tbxvae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="s7vb2nxxp"/><path class="ujykvrsnu wm-shine"/><path class="e5ttz1b5n"/><path class="sa9tbxvae wm-deco"/></g>`,
		"fallback": "withicons-kawaii:git-fork",
	});
}

export default Component;
