import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/asbi602zl.css';
import '../../css/f/fr2owub7s.css';
import '../../css/k/kfd4e9bhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="asbi602zl"/><path class="fr2owub7s"/><path class="kfd4e9bhd"/></g>`,
		"fallback": "reicon:brush2",
	});
}

export default Component;
