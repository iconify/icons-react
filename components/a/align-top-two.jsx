import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/p/pyk5uu4ad.css';
import '../../css/k/kw7ez0beo.css';
import '../../css/m/m-5tr2bwm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><rect class="pyk5uu4ad"/><rect class="kw7ez0beo"/><rect class="m-5tr2bwm"/></g>`,
		"fallback": "icon-park:align-top-two",
	});
}

export default Component;
