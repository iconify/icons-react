import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy6apqb-v.css';
import '../../css/r/ryas737co.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy6apqb-v"/><path class="ryas737co"/>`,
		"fallback": "devicon:couchdb-wordmark",
	});
}

export default Component;
