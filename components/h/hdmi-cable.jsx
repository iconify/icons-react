import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z278zvbpd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z278zvbpd"/>`,
		"fallback": "icon-park-outline:hdmi-cable",
	});
}

export default Component;
