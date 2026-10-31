import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gskctac2u.css';
import '../../css/r/rg2yp9c4i.css';
import '../../css/i/i-dl6lbnq.css';
import '../../css/t/td758dwwq.css';
import '../../css/a/a5kssssao.css';
import '../../css/z/z02vy56mh.css';
import '../../css/j/jgrkidcgo.css';
import '../../css/k/kv3bqbbur.css';
import '../../css/w/wbj-brb9h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gskctac2u"/><path class="rg2yp9c4i"/><path class="i-dl6lbnq"/><path class="td758dwwq"/><path class="a5kssssao"/><path class="z02vy56mh"/><path class="jgrkidcgo"/><path class="kv3bqbbur"/><path class="wbj-brb9h"/>`,
		"fallback": "iconito:bread",
	});
}

export default Component;
