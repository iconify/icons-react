import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jca4lnd7d.css';
import '../../css/m/mwsfceayy.css';
import '../../css/g/gh-chmbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jca4lnd7d wm-k"/><path class="mwsfceayy wm-k"/><path class="gh-chmbev wm-a"/>`,
		"fallback": "withicons-bauhaus:file-audio",
	});
}

export default Component;
