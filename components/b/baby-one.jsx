import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/e/enqwhf6kv.css';
import '../../css/g/glxmc61cx.css';
import '../../css/j/jdgziibth.css';
import '../../css/s/sghdsebar.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgfQvmeFq"><g class="hv130ab-t"><circle class="enqwhf6kv"/><path class="glxmc61cx"/><path class="jdgziibth"/><path class="sghdsebar"/></g></mask></defs><path mask="url(#SVGgfQvmeFq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baby-one",
	});
}

export default Component;
