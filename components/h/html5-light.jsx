import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smn7yqb_q.css';
import '../../css/b/bofo55-gm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smn7yqb_q"/><path class="bofo55-gm"/>`,
		"fallback": "selfhst:html5-light",
	});
}

export default Component;
