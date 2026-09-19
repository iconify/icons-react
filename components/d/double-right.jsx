import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwqiqkueu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwqiqkueu"/>`,
		"fallback": "icon-park-outline:double-right",
	});
}

export default Component;
