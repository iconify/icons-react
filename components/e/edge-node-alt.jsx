import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3aaqabzw.css';
import '../../css/t/tl0s0vbfd.css';
import '../../css/o/o-jkj3has.css';
import '../../css/h/hn160mbff.css';
import '../../css/z/zd7flj3zb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3aaqabzw"/><circle class="tl0s0vbfd"/><circle class="o-jkj3has"/><circle class="hn160mbff"/><path class="zd7flj3zb"/>`,
		"fallback": "carbon:edge-node-alt",
	});
}

export default Component;
