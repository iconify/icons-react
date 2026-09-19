import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha_ce1bjt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha_ce1bjt"/>`,
		"fallback": "fluent-emoji-flat:heavy-equals-sign",
	});
}

export default Component;
