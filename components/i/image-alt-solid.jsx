import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apugdvb-c.css';
import '../../css/p/pt1w2bihr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apugdvb-c"/><path clip-rule="evenodd" class="pt1w2bihr"/>`,
		"fallback": "teenyicons:image-alt-solid",
	});
}

export default Component;
