import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/f0ysc7bga.css';
import '../../css/x/x_0cd7blb.css';
import '../../css/s/s9-jelbih.css';
import '../../css/z/z1v9jsbba.css';
import '../../css/a/adr9mpbqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="f0ysc7bga wm-shadow"/><path class="wm-shadow x_0cd7blb"/><path class="s9-jelbih"/><path class="z1v9jsbba"/><path class="adr9mpbqg"/></g>`,
		"fallback": "withicons-brutal:glasses",
	});
}

export default Component;
