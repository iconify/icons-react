import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/a/atjk8mbde.css';
import '../../css/l/l3zeb5brs.css';
import '../../css/z/zk2ql56dd.css';
import '../../css/e/eln0b5buu.css';
import '../../css/e/e1joedbcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><line x1="14" x2="34" y1="8" y2="8" class="atjk8mbde"/><line x1="14" x2="34" y1="8" y2="8" class="atjk8mbde"/><line x1="14" x2="34" y1="40" y2="40" class="atjk8mbde"/><rect class="l3zeb5brs"/><rect class="zk2ql56dd"/><rect class="eln0b5buu"/><rect class="e1joedbcn"/><line x1="40" x2="40" y1="14" y2="34" class="atjk8mbde"/><line x1="8" x2="8" y1="14" y2="34" class="atjk8mbde"/></g>`,
		"fallback": "icon-park:anchor",
	});
}

export default Component;
