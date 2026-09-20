import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4t60l8ox.css';
import '../../css/h/hwnfhubeq.css';
import '../../css/h/hsyfdwbne.css';
import '../../css/g/g9z0_ccaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4t60l8ox"/><path class="hwnfhubeq"/><path class="hsyfdwbne"/><path class="g9z0_ccaj"/>`,
		"fallback": "lineicons:bittorrent",
	});
}

export default Component;
