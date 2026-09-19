import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck-1flr4c.css';
import '../../css/b/buc-_ybgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck-1flr4c"/><circle class="buc-_ybgy"/>`,
		"fallback": "bxs:file-find",
	});
}

export default Component;
