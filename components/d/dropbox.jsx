import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6ffl6b-d.css';
import '../../css/c/czuc2kb0l.css';
import '../../css/b/bphnj6bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b6ffl6b-d"/><path clip-rule="evenodd" class="czuc2kb0l"/><path clip-rule="evenodd" class="bphnj6bkw"/>`,
		"fallback": "uim:dropbox",
	});
}

export default Component;
