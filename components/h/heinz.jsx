import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8_6w5bww.css';
import '../../css/c/cbv4wsbfy.css';
import '../../css/u/uqqmp4b0c.css';

const viewBox = {"width":110.919,"height":49.685,"left":-1.406,"top":-1.406};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8_6w5bww"/><path class="cbv4wsbfy"/><path class="uqqmp4b0c"/>`,
		"fallback": "thesvg-color:heinz",
	});
}

export default Component;
