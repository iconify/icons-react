import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlpv10bkk.css';
import '../../css/a/aai7kpb9b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlpv10bkk"/><path class="aai7kpb9b"/>`,
		"fallback": "energy-icons:ammonia-48-bold",
	});
}

export default Component;
