import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3k9y0miw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3k9y0miw"/>`,
		"fallback": "entypo-social:creative-cloud",
	});
}

export default Component;
