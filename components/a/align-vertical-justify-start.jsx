import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h406zcb0o.css';
import '../../css/w/wgfd128tk.css';
import '../../css/a/a05vi56mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="h406zcb0o"/><rect class="wgfd128tk"/><path class="a05vi56mf"/></g>`,
		"fallback": "lucide:align-vertical-justify-start",
	});
}

export default Component;
