import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npgudrbvm.css';
import '../../css/s/sqx9578-o.css';
import '../../css/v/v1pzelk4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npgudrbvm"/><path class="sqx9578-o"/><path class="v1pzelk4p"/>`,
		"fallback": "fxemoji:balloon",
	});
}

export default Component;
