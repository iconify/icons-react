import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4m--tbpp.css';
import '../../css/i/ijgbmtb8w.css';
import '../../css/f/fiqktq5gi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4m--tbpp"/><path class="ijgbmtb8w"/><path class="fiqktq5gi"/>`,
		"fallback": "energy-icons:cable-lay-vessel-48",
	});
}

export default Component;
