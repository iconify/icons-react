import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jca4lnd7d.css';
import '../../css/m/mwsfceayy.css';
import '../../css/f/f9n_6jbuq.css';
import '../../css/h/hvrzq_b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jca4lnd7d wm-k"/><path class="mwsfceayy wm-k"/><path class="f9n_6jbuq wm-a"/><path class="hvrzq_b9q wm-a"/>`,
		"fallback": "withicons-bauhaus:file-search",
	});
}

export default Component;
