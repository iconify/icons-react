import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvggpac7z.css';
import '../../css/d/ddeq6kb3m.css';
import '../../css/s/sc9dz5b-p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvggpac7z"/><path class="ddeq6kb3m"/><path class="sc9dz5b-p"/>`,
		"fallback": "energy-icons:house-heat-pump-48",
	});
}

export default Component;
