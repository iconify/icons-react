import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/z/zqu4nmb3m.css';
import '../../css/w/wzwtr30we.css';
import '../../css/m/migmhu_li.css';
import '../../css/x/xs_do1kpf.css';
import '../../css/u/u9tn_upcw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="zqu4nmb3m"/><path clip-rule="evenodd" class="wzwtr30we"/><path class="migmhu_li"/><path class="xs_do1kpf"/><path class="u9tn_upcw"/></g>`,
		"fallback": "streamline-kameleon-color:bank-check-pop",
	});
}

export default Component;
