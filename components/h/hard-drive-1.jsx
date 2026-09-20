import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hu8s6jbwf.css';
import '../../css/p/pkj8qsbxv.css';
import '../../css/s/s5myckckt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hu8s6jbwf"/><path class="pkj8qsbxv"/><path class="s5myckckt"/></g>`,
		"fallback": "streamline-flex:hard-drive-1",
	});
}

export default Component;
