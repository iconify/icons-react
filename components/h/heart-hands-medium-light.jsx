import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-qftzgsu.css';
import '../../css/b/bbynl-b9a.css';
import '../../css/h/hps6mjb0w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-qftzgsu"/><path clip-rule="evenodd" class="bbynl-b9a"/><path class="hps6mjb0w"/></g>`,
		"fallback": "fluent-emoji-flat:heart-hands-medium-light",
	});
}

export default Component;
