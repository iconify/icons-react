import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rzc42il7p.css';
import '../../css/x/xeuwd5bbt.css';
import '../../css/h/huilrub5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rzc42il7p"/><rect class="xeuwd5bbt"/><path class="huilrub5x"/></g>`,
		"fallback": "proicons:hamburger",
	});
}

export default Component;
