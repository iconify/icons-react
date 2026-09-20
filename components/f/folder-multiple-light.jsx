import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ig4h0qd7x.css';
import '../../css/n/ni5qw54vq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ig4h0qd7x"/><path class="ni5qw54vq"/></g>`,
		"fallback": "stash:folder-multiple-light",
	});
}

export default Component;
