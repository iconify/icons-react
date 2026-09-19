import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1a8a243t.css';
import '../../css/f/fkfwtja1r.css';
import '../../css/n/niz7j71ie.css';
import '../../css/t/txvtnaccs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1a8a243t"/><circle class="fkfwtja1r"/><path class="niz7j71ie"/><path class="txvtnaccs"/>`,
		"fallback": "carbon:data-volume-alt",
	});
}

export default Component;
