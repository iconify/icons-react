import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w7lck9a3w.css';
import '../../css/j/j1lyn8bzy.css';
import '../../css/v/v2dp4ob6m.css';
import '../../css/z/zsofadb-y.css';
import '../../css/i/i1p81mbxo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="w7lck9a3w"/><circle class="j1lyn8bzy"/><path class="v2dp4ob6m"/><circle class="zsofadb-y"/><path class="i1p81mbxo"/></g>`,
		"fallback": "streamline:computer-database-server-1-server-network-internet",
	});
}

export default Component;
