import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/v/vlm62ob2b.css';
import '../../css/w/wrk82tbld.css';
import '../../css/i/ij-0zvbxc.css';
import '../../css/o/o-j6n7bbc.css';
import '../../css/o/oxcfucc3x.css';
import '../../css/c/c0eaxjt3a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="vlm62ob2b"/><circle class="wrk82tbld"/><path class="ij-0zvbxc"/><path class="o-j6n7bbc"/><rect class="oxcfucc3x"/><path class="c0eaxjt3a"/></g>`,
		"fallback": "icon-park:cake-one",
	});
}

export default Component;
