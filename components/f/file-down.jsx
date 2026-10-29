import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jca4lnd7d.css';
import '../../css/z/z8lkaigyu.css';
import '../../css/m/mwsfceayy.css';
import '../../css/k/kqozlcp2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jca4lnd7d wm-k"/><path class="wm-k z8lkaigyu"/><path class="mwsfceayy wm-k"/><path class="kqozlcp2t wm-a"/>`,
		"fallback": "withicons-bauhaus:file-down",
	});
}

export default Component;
