import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s08ibwbpf.css';
import '../../css/f/f8omgzl8n.css';
import '../../css/d/drnojd54o.css';
import '../../css/s/s-bt4ab9j.css';
import '../../css/y/ypylkp-2l.css';
import '../../css/x/x3mkrrzda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="s08ibwbpf"/><path class="f8omgzl8n"/><path class="drnojd54o"/><path class="s-bt4ab9j"/><path class="ypylkp-2l"/><path class="x3mkrrzda"/></g>`,
		"fallback": "matita:bug",
	});
}

export default Component;
