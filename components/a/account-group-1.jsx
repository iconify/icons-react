import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nviailsxc.css';
import '../../css/v/vmdd06bng.css';
import '../../css/c/ck-cmbcxc.css';
import '../../css/u/u3jmhobjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="nviailsxc"/><path class="vmdd06bng"/><path class="ck-cmbcxc"/><path class="u3jmhobjy"/></g>`,
		"fallback": "streamline-cyber:account-group-1",
	});
}

export default Component;
