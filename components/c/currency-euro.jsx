import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lezz7hbxw.css';
import '../../css/b/b4p59kwgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer lezz7hbxw"/><path class="b4p59kwgz duoicon-primary-layer"/>`,
		"fallback": "duo-icons:currency-euro",
	});
}

export default Component;
