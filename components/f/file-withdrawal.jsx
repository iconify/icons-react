import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q4bj7xbuk.css';
import '../../css/f/f8ec2ebsz.css';
import '../../css/b/b0qk9-1ay.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="q4bj7xbuk"/><path class="f8ec2ebsz"/><path class="b0qk9-1ay"/></g>`,
		"fallback": "icon-park-outline:file-withdrawal",
	});
}

export default Component;
