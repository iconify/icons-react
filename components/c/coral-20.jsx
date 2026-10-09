import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfi4ayb5u.css';
import '../../css/l/ljp18512i.css';
import '../../css/e/eqwghdb8t.css';
import '../../css/p/pdcho1m7g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfi4ayb5u"/><path class="ljp18512i"/><path class="eqwghdb8t"/><path class="pdcho1m7g"/>`,
		"fallback": "energy-icons:coral-20",
	});
}

export default Component;
