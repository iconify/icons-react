import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpeepxwiw.css';

const viewBox = {"width":1217,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpeepxwiw"/>`,
		"fallback": "websymbol:archive",
	});
}

export default Component;
