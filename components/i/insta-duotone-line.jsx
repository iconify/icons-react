import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y06121bln.css';
import '../../css/q/qc3x1gn8n.css';
import '../../css/k/k0evexoqr.css';
import '../../css/o/o55rtrbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y06121bln"/><path class="qc3x1gn8n"/><circle class="k0evexoqr"/><circle class="o55rtrbry"/></g>`,
		"fallback": "lets-icons:insta-duotone-line",
	});
}

export default Component;
