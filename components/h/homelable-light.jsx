import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va64q7e3s.css';
import '../../css/t/tr98k1b4a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va64q7e3s"/><path class="tr98k1b4a"/>`,
		"fallback": "selfhst:homelable-light",
	});
}

export default Component;
