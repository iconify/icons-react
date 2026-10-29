import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jca4lnd7d.css';
import '../../css/m/mwsfceayy.css';
import '../../css/r/rrd3mlsbn.css';
import '../../css/f/fyugdplzg.css';
import '../../css/l/li-anccmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jca4lnd7d wm-k"/><path class="mwsfceayy wm-k"/><path class="rrd3mlsbn wm-a"/><path class="fyugdplzg wm-a"/><path class="li-anccmn wm-a"/>`,
		"fallback": "withicons-bauhaus:file-archive",
	});
}

export default Component;
