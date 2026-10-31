import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3f04pbjm.css';
import '../../css/n/nj980ufqv.css';
import '../../css/b/b7zqchbmp.css';
import '../../css/a/akqz6wb6u.css';
import '../../css/a/a0xo2ffbx.css';
import '../../css/t/t09vemwnu.css';
import '../../css/y/ywgun4xog.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3f04pbjm"/><path class="nj980ufqv"/><path class="b7zqchbmp"/><path class="akqz6wb6u"/><path class="a0xo2ffbx"/><path class="t09vemwnu"/><path class="ywgun4xog"/>`,
		"fallback": "iconito:butter",
	});
}

export default Component;
