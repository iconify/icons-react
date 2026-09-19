import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/c/c_t74dp4a.css';
import '../../css/b/bo47x_htg.css';
import '../../css/b/bbxcluyzs.css';
import '../../css/l/lewwhobzy.css';
import '../../css/n/nok-9wbgu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="c_t74dp4a"/><path class="bo47x_htg"/><path class="bbxcluyzs"/><path class="lewwhobzy"/><path class="nok-9wbgu"/></g>`,
		"fallback": "icon-park:block-seven",
	});
}

export default Component;
