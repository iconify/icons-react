import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa8mtjico.css';
import '../../css/x/xs22834vg.css';
import '../../css/v/v4yfn2nbx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa8mtjico"/><path class="xs22834vg"/><path class="v4yfn2nbx"/>`,
		"fallback": "energy-icons:aluminium-48",
	});
}

export default Component;
