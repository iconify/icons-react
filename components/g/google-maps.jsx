import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nntzbb59q.css';
import '../../css/h/hmxzfbbbc.css';
import '../../css/c/czkarxbam.css';
import '../../css/o/opy7cax-c.css';
import '../../css/x/xmbjqibnh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nntzbb59q"/><path class="hmxzfbbbc"/><path class="czkarxbam"/><path class="opy7cax-c"/><path class="xmbjqibnh"/>`,
		"fallback": "selfhst:google-maps",
	});
}

export default Component;
