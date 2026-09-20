import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlbyxzz0c.css';
import '../../css/k/kw9ha86db.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlbyxzz0c"/><path class="kw9ha86db"/>`,
		"fallback": "selfhst:chhoto-url-dark",
	});
}

export default Component;
