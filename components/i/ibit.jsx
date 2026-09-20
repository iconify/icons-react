import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8rckdvqp.css';
import '../../css/n/n8-9h1f5h.css';
import '../../css/p/pojww1bbh.css';
import '../../css/a/abb0l1bch.css';
import '../../css/s/sstsa6bsh.css';
import '../../css/q/qssluzbwq.css';
import '../../css/t/tbjze_bky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8rckdvqp"/><path class="n8-9h1f5h"/><path class="pojww1bbh"/><path class="abb0l1bch"/><path class="sstsa6bsh"/><path class="qssluzbwq"/><path class="tbjze_bky"/>`,
		"fallback": "token:ibit",
	});
}

export default Component;
