import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n2wcz0b2s.css';
import '../../css/b/bjh1f82tm.css';
import '../../css/h/hx6xedbpi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n2wcz0b2s"/><path class="bjh1f82tm"/><path class="hx6xedbpi"/></g>`,
		"fallback": "glyphs:eye-1",
	});
}

export default Component;
