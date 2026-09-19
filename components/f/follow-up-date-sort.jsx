import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/z/z8rqlrb4w.css';
import '../../css/s/s2p4zacxn.css';
import '../../css/o/oyh43sbch.css';
import '../../css/n/n_nitbb9i.css';
import '../../css/z/zbkq-vblj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="z8rqlrb4w"/><path class="s2p4zacxn"/><path class="oyh43sbch"/><path class="n_nitbb9i"/><path class="zbkq-vblj"/></g>`,
		"fallback": "icon-park:follow-up-date-sort",
	});
}

export default Component;
