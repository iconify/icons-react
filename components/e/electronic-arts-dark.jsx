import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwgz_dbzy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwgz_dbzy"/>`,
		"fallback": "selfhst:electronic-arts-dark",
	});
}

export default Component;
