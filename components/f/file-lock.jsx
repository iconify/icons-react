import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jca4lnd7d.css';
import '../../css/m/mwsfceayy.css';
import '../../css/o/ohmxkxa7g.css';
import '../../css/h/hh4784bmx.css';
import '../../css/n/ndvonabzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jca4lnd7d wm-k"/><path class="mwsfceayy wm-k"/><path class="ohmxkxa7g wm-a"/><path class="hh4784bmx wm-a"/><path class="ndvonabzk wm-a"/>`,
		"fallback": "withicons-bauhaus:file-lock",
	});
}

export default Component;
