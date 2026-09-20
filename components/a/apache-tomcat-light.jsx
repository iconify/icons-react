import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp6zpdntm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp6zpdntm"/>`,
		"fallback": "selfhst:apache-tomcat-light",
	});
}

export default Component;
