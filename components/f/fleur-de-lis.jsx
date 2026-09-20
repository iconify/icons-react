import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7sbyqb3w.css';
import '../../css/f/frccn5xec.css';
import '../../css/m/m1_20ublh.css';
import '../../css/p/pm3nzbc5u.css';
import '../../css/f/f6cutbbdd.css';
import '../../css/u/urqkv59yr.css';
import '../../css/j/ji2uu8nkx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7sbyqb3w"/><path class="frccn5xec"/><path class="m1_20ublh"/><path class="pm3nzbc5u"/><g class="f6cutbbdd"><path class="urqkv59yr"/><path class="ji2uu8nkx"/></g>`,
		"fallback": "openmoji:fleur-de-lis",
	});
}

export default Component;
