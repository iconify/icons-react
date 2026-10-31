import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwzrj2bfe.css';
import '../../css/p/p-kj71bio.css';
import '../../css/k/kq09bbcps.css';
import '../../css/m/m--kjgbhl.css';
import '../../css/j/job9ntnfc.css';
import '../../css/r/r9sxh0jlf.css';
import '../../css/i/irkzuzgre.css';
import '../../css/a/aluwocc8h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwzrj2bfe"/><path class="p-kj71bio"/><path class="kq09bbcps"/><path class="m--kjgbhl"/><path class="job9ntnfc"/><path class="r9sxh0jlf"/><path class="irkzuzgre"/><path class="aluwocc8h"/>`,
		"fallback": "iconito:cookie",
	});
}

export default Component;
