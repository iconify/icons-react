import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy37zibmr.css';
import '../../css/o/o15ae4bpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy37zibmr"/><path class="o15ae4bpw"/>`,
		"fallback": "selfhst:convoy",
	});
}

export default Component;
