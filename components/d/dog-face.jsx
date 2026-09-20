import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqm58bbqg.css';
import '../../css/m/ma_t_nb-i.css';
import '../../css/e/ejztju1mg.css';
import '../../css/o/oe0o_abgj.css';
import '../../css/m/mqnxuibgp.css';
import '../../css/w/wk6cmhplt.css';
import '../../css/v/vbegrd7qh.css';
import '../../css/a/at2mwyb6w.css';
import '../../css/b/bqv6meena.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqm58bbqg"/><path class="ma_t_nb-i"/><path class="ejztju1mg"/><path class="oe0o_abgj"/><path class="mqnxuibgp"/><path class="wk6cmhplt"/><path class="vbegrd7qh"/><path class="at2mwyb6w"/><path class="bqv6meena"/>`,
		"fallback": "openmoji:dog-face",
	});
}

export default Component;
