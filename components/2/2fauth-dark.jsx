import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/a/avhbh1bya.css';
import '../../css/a/ak_8e2pht.css';

const viewBox = {"width":41.63,"height":57.198};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="avhbh1bya"/><path class="ak_8e2pht"/></g>`,
		"fallback": "thesvg-color:2fauth-dark",
	});
}

export default Component;
