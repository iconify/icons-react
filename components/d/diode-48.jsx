import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv9yq260v.css';
import '../../css/s/ssgj37swb.css';
import '../../css/c/cy8jwyroj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv9yq260v"/><path class="ssgj37swb"/><path class="cy8jwyroj"/>`,
		"fallback": "energy-icons:diode-48",
	});
}

export default Component;
