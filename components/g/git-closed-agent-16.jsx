import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igkh1jbmt.css';
import '../../css/b/b166yvpks.css';
import '../../css/u/u8zlrzbxv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igkh1jbmt"/><path class="b166yvpks"/><path class="u8zlrzbxv"/>`,
		"fallback": "octicon:git-closed-agent-16",
	});
}

export default Component;
