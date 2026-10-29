import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvwqu5bfo.css';
import '../../css/z/zuiar_b-c.css';
import '../../css/k/kwfqovb_e.css';
import '../../css/m/m249brb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvwqu5bfo wm-k"/><path class="wm-k zuiar_b-c"/><path class="kwfqovb_e wm-a"/><path class="m249brb1v wm-k"/>`,
		"fallback": "withicons-bauhaus:bell",
	});
}

export default Component;
