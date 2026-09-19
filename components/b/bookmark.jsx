import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/r/r0ng9--ek.css';
import '../../css/z/zfyrcjb-q.css';
import '../../css/z/zhssuvbwg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGBYcKnVME"><g class="ufeehvblu"><path class="r0ng9--ek"/><path clip-rule="evenodd" class="zfyrcjb-q"/><path class="zhssuvbwg"/></g></mask></defs><path mask="url(#SVGBYcKnVME)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bookmark",
	});
}

export default Component;
