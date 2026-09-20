import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsk1vyb8u.css';
import '../../css/z/zpm02gbpx.css';
import '../../css/a/am34frbkn.css';
import '../../css/b/b9qb62bje.css';
import '../../css/n/nq4h-9b9i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsk1vyb8u"/><path class="zpm02gbpx"/><path class="am34frbkn"/><path class="b9qb62bje"/><path class="nq4h-9b9i"/>`,
		"fallback": "openmoji:herb",
	});
}

export default Component;
