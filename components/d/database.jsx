import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb1h9fbba.css';
import '../../css/z/za2wbbz4v.css';
import '../../css/l/ljgnpiurg.css';
import '../../css/o/o-jkj3has.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb1h9fbba"/><circle class="za2wbbz4v"/><circle class="ljgnpiurg"/><circle class="o-jkj3has"/>`,
		"fallback": "ooui:database",
	});
}

export default Component;
