import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzjf97_aw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzjf97_aw"/>`,
		"fallback": "entypo:feather",
	});
}

export default Component;
