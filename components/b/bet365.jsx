import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biywueb9y.css';
import '../../css/n/nic2oihrm.css';
import '../../css/c/cga1y9b8q.css';
import '../../css/f/fr_4vlbpo.css';
import '../../css/e/eqdsspleo.css';

const viewBox = {"width":100,"height":51.195};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biywueb9y"/><path class="nic2oihrm"/><path class="cga1y9b8q"/><path class="fr_4vlbpo"/><path class="eqdsspleo"/>`,
		"fallback": "thesvg-color:bet365",
	});
}

export default Component;
