import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8n6rmbln.css';
import '../../css/j/jb0zuue-q.css';
import '../../css/z/zhbt8nb7w.css';
import '../../css/n/noe-bqa0t.css';
import '../../css/b/br7h4zb8r.css';
import '../../css/f/frt7-cbeb.css';
import '../../css/j/j-tq2057n.css';
import '../../css/g/g-jaquo0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8n6rmbln wm-shadow"/><path class="jb0zuue-q wm-k"/><path class="wm-k zhbt8nb7w"/><path class="noe-bqa0t wm-k"/><path class="br7h4zb8r wm-k"/><path class="frt7-cbeb wm-shine"/><path class="j-tq2057n wm-k"/><path class="g-jaquo0g wm-a"/>`,
		"fallback": "withicons-plush:heart-handshake",
	});
}

export default Component;
