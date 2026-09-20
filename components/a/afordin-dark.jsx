import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/s/stk0jfp5a.css';
import '../../css/s/sjc8stbkt.css';

const viewBox = {"width":196,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="stk0jfp5a"/><path class="sjc8stbkt"/></g>`,
		"fallback": "thesvg-color:afordin-dark",
	});
}

export default Component;
