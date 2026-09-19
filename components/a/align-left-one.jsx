import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/z/zsylbebuv.css';
import '../../css/u/ud13b88bd.css';
import '../../css/n/n3286ueaa.css';
import '../../css/y/yr08drbfn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="zsylbebuv"/><path class="ud13b88bd"/><path class="n3286ueaa"/><path class="yr08drbfn"/></g>`,
		"fallback": "icon-park:align-left-one",
	});
}

export default Component;
