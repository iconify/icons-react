import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj4pyrh1t.css';
import '../../css/h/h0-fzyzmr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj4pyrh1t"/><path class="h0-fzyzmr"/>`,
		"fallback": "selfhst:heyform-dark",
	});
}

export default Component;
