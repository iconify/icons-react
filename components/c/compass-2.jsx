import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/bkk-iov7u.css';
import '../../css/c/crcwzxbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="bkk-iov7u"/><path class="crcwzxbsf"/></g>`,
		"fallback": "streamline-cyber:compass-2",
	});
}

export default Component;
